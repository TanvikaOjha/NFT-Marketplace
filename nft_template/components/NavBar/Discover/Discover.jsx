import React from 'react';
import Style from './Discover.module.css';
import Link from 'next/link';

const Discover = () => {
  //Discover Navigation menu
  const discover = [
    {name: "Collection", link: "collection",},
    {name: "Search", link: "searchPage"},
    {name: "Author Profile", link: "author"},
    {name: "NFT Details", link: "NFT-details"},
    {name: "Account Settings", link: "account"},
    {name: "Upload NFT", link: "uploadNFT"},
    {name: "Connect Wallet", link: "connectWallet"},
    {name: "Blog", link: "blog"},
  ];
  return (
    <div>
      {discover.map((item, index) => (
        <div key={index + 1} className={Style.discover}>
        <Link href={{pathname: `/${item.link}`}}>
          {item.name}
        </Link>
        </div>
      ))}
    </div>
  )
} 

export default Discover;
