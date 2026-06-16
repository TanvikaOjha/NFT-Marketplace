import React, {useState, useEffect} from 'react'
import Style from '../styles/author.module.css'
import {Banner, NFTCardTwo} from '../collectionPage/collectionIndex';
import {Brand, Title} from '../components/componentIndex';
import {AuthorProfileCard, AuthorTaps, AuthorNFTCardBox} from '../authorPage/componentIndex'
import images from '../img'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard';
const author = () => {
  const followerArray = [{background: images.creatorbackground1,
                               user: images.user1},
                               {background: images.creatorbackground2,
                               image: images.user2},{background: images.creatorbackground3,
                                user: images.user3},
                               {background: images.creatorbackground4,
                               user: images.user4},
                               {background: images.creatorbackground5,
                               user: images.user5},
                               {background: images.creatorbackground6,
                               user: images.user6}
                              ];     
    const popularArray = [images.user1,images.user2,images.user3,
                          images.user4,images.user5,images.user6,
                          images.user7,images.user8 ];
    const [collectibles, setCollectibles]  = useState(true);
    const [created, setCreated] = useState(false);  
    const [like, setLike] = useState(false); 
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);                  
  return (
    <div className={Style.author}> 
      <Banner bannerImage={images.creatorbackground1}/>
      <AuthorProfileCard/>
      <AuthorTaps setCollectibles={setCollectibles} setCreated={setCreated} setLike={setLike} setFollower={setFollower} setFollowing={setFollowing} />
      <AuthorNFTCardBox collectibles={collectibles} created={created} like={like} follower={follower} following={following}/>
      <Title heading="Popular Creator" paragraph="Click on music icon and enjoy NFT music or audio"/>
      <div className={Style.author_box}>
        {followerArray.map((el, i) =>{
          <FollowerTabCard i={i} el={el}/>
        })}
      </div>
      {/* {popularArray.map((el,i)=>(
        <FollowerTabCard key={i+1} i={i} el={el}/>
      ))} */}
      <Brand/>
    </div>
  )
}

export default author
