// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

//internal import for NFT Openzeppelin
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "forge-std/console.sol"; //explicitly import console.sol for debugging
contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds; //every NFT will have a unique ID, so we use a counter to keep track of the IDs
    Counters.Counter private _itemsSold; //counter to keep track of the number of items sold

    uint256 listingPrice = 0.025 ether; //price to list an NFT on the marketplace
    address payable owner; 
    mapping(uint256 => MarketItem) private idToMarketItem; //mapping(id => struct of marketitem) to keep track of the market items

    struct MarketItem {
        uint256 tokenId; 
        address payable seller; //creator of the NFT
        address payable owner; 
        uint256 price; 
        bool sold; 
    }
    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    constructor() ERC721("NFT Token", "MyNFT") {
        owner = payable(msg.sender);
         //owner of the marketplace is the deployer of the contract
    }
    //owner of the marketplace can list an NFT for sale by calling this function, they need to provide the tokenId of the NFT and the price they want to sell it for
    function updateListingPrice(uint256 _listingPrice) public payable{
        require(owner == msg.sender, "Only marketplace owner can update listing price");
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    //create nft function

    function createToken(string memory tokenURI, uint256 price) public payable returns (uint256 ) { //returns id
        _tokenIds.increment(); //increment the token ID counter to get a new unique ID for the new NFT

        uint256 newTokenId = _tokenIds.current();//get the current token ID from the counter
        _mint(msg.sender, newTokenId); //mint the NFT to the creator of the NFT
        _setTokenURI(newTokenId, tokenURI); //set the token URI for the new token ID
        
        createMarketItem(newTokenId, price);
        return newTokenId; //return the new token ID to the caller
    }

    //creating market item function, this function is called by the createToken function to create a new market item for the newly created NFT
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei"); 
        require(msg.value == listingPrice, "Price must be equal to listing price"); 
        idToMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender), //seller is the creator of the NFT
            payable(address(this)), //owner is the marketplace contract
            price,
            false //sold is false because the item is not sold yet
        );
        _transfer(msg.sender, address(this), tokenId); //transfer the NFT from the creator to the marketplace contract
        emit MarketItemCreated(tokenId, msg.sender, address(this), price, false); //emit the MarketItemCreated event to notify the frontend that a new market item has been created
    }

    //function for resell token
    function resellToken(uint256 tokenId, uint256 price) public payable {
        require(idToMarketItem[tokenId].owner == msg.sender, "Only item owner can perform this operation"); 
        require(msg.value == listingPrice, "Price must be equal to listing price"); //the seller needs to pay the listing price to resell the item
        idToMarketItem[tokenId].sold = false; //update the sold status of the item to false because the item is not sold yet
        idToMarketItem[tokenId].price = price; 
        idToMarketItem[tokenId].seller = payable(msg.sender); //update the seller of the item to the current owner who is reselling the item
        idToMarketItem[tokenId].owner = payable(address(this)); //update the owner of the item to the marketplace contract
        
        _itemsSold.decrement(); //decrement the items sold counter because the item is not sold yet
        _transfer(msg.sender, address(this), tokenId); //transfer the NFT from the current owner to the marketplace contract
    }

    //function to create market sale, this function is called by the buyer to purchase an NFT from the marketplace
    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idToMarketItem[tokenId].price; 
        
        require(msg.value == price, "Please submit the asking price in order to complete the purchase"); //the buyer needs to pay the asking price to purchase the item
        idToMarketItem[tokenId].owner.transfer(msg.value); 
        _transfer(address(this), msg.sender, tokenId); 
        idToMarketItem[tokenId].owner = payable(msg.sender); 
        idToMarketItem[tokenId].sold = true; 
        idToMarketItem[tokenId].seller = payable(address(0)); //update the seller of the item to the zero address because the item is sold and there is no seller anymore   
        _itemsSold.increment(); 
        _transfer(address(this), msg.sender, tokenId); //transfer the NFT from the marketplace contract to the buyer
        
        payable(owner).transfer(listingPrice); //pay the listing price to the marketplace owner
        payable(idToMarketItem[tokenId].seller).transfer(msg.value); //pay the seller of the item the asking price
    

      
}
//getting unsold NFT data

function fetchMarketItem() public view returns (MarketItem[] memory) {
    uint256 itemCount = _tokenIds.current(); //get the total number of items created
    uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current(); 
    uint256 currentIndex = 0; //initialize the current index for the unsold items array

    MarketItem[] memory items = new MarketItem[](unsoldItemCount); //create a new array to hold the unsold items

    for (uint256 i = 0; i < itemCount; i++) { //loop through all the items created
        if (idToMarketItem[i + 1].owner == address(this)) { //check if the owner of the item is the marketplace contract, which means the item is unsold
            uint256 currentId = i + 1; //get the current item ID
            MarketItem storage currentItem = idToMarketItem[currentId]; //get the current item from the mapping
            items[currentIndex] = currentItem; //add the current item to the unsold items array
            currentIndex += 1; //increment the current index for the unsold items array
        }
    }
    return items; //return the array of unsold items to the caller
}

//purchase item function, this function is called by the buyer to purchase an NFT from the marketplace
function fetchMyNFT() public view returns (MarketItem[] memory) {
    uint256 totalItemCount = _tokenIds.current(); //get the total number of items created
    uint256 itemCount = 0; //initialize the item count for the items owned by the caller
    uint256 currentIndex = 0; //initialize the current index for the items owned by the caller

    for (uint256 i = 0; i < totalItemCount; i++) { //loop through all the items created
        if (idToMarketItem[i + 1].owner == msg.sender) { //check if the owner of the item is the caller, which means the item is owned by the caller
            itemCount += 1; //increment the item count for the items owned by the caller
        }
    }

    MarketItem[] memory items = new MarketItem[](itemCount); //create a new array to hold the items owned by the caller

    for (uint256 i = 0; i < totalItemCount; i++) { //loop through all the items created again to populate the items owned by the caller array
        if (idToMarketItem[i + 1].owner == msg.sender) { //check if the owner of the item is the caller, which means the item is owned by the caller
            uint256 currentId = i + 1; //get the current item ID
            MarketItem storage currentItem = idToMarketItem[currentId]; //get the current item from the mapping
            items[currentIndex] = currentItem; //add the current item to the items owned by the caller array
            currentIndex += 1; //increment the current index for the items owned by the caller array
        }
    }
    return items; //return the array of items owned by the caller to the caller
  

  //single user item function, this function is called by the buyer to get the details of a single item they own
function fetchItemListed) public view returns (MarketItem[] memory) {
    uint256 totalItemCount = _tokenIds.current(); //get the total number of items created
    uint256 itemCount = 0; //initialize the item count for the items listed by the caller
    uint256 currentIndex = 0; //initialize the current index for the items listed by the caller

    for (uint256 i = 0; i < totalItemCount; i++) { //loop through all the items created
        if (idToMarketItem[i + 1].seller == msg.sender) { //check if the seller of the item is the caller, which means the item is listed by the caller
            itemCount += 1; //increment the item count for the items listed by the caller
        }
    }

    MarketItem[] memory items = new MarketItem[](itemCount); //create a new array to hold the items listed by the caller

    for (uint256 i = 0; i < totalItemCount; i++) { //loop through all the items created again to populate the items listed by the caller array
        if (idToMarketItem[i + 1].seller == msg.sender) { //check if the seller of the item is the caller, which means the item is listed by the caller
            uint256 currentId = i + 1; //get the current item ID
            MarketItem storage currentItem = idToMarketItem[currentId]; //get the current item from the mapping
            items[currentIndex] = currentItem; //add the current item to the items listed by the caller array
            currentIndex += 1; //increment the current index for the items listed by the caller array
        }
    }
    return items; //return the array of items listed by the caller to the caller
}
