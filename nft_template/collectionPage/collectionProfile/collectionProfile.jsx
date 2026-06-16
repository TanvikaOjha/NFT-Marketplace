import React from 'react';
import Image from 'next/image';
import Style from './collectionProfile.module.css'
import {
    TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter,
     TiSocialInstagram
} from 'react-icons/ti';
import images from '../../img';

const collectionProfile = () => {
    const cardArray = [1,2,3,4]
  return (
    <div className={Style.collectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <Image src={images.nft_image_1} alt='nft image' width={800} height={800} className={Style.collectionProfile_box_left_img}/>
                <div className={Style.collectionProfile_box_left_social}>
                    <a href="#">
                        <TiSocialFacebook/>
                    </a>
                    <a href="#">
                        <TiSocialInstagram/>
                    </a>
                    <a href="#">
                        <TiSocialLinkedin/>
                    </a>
                    <a href="#">
                        <TiSocialTwitter/>
                    </a>
                </div>
            </div>
            <div className={Style.collectionProfile_box_middle}>
                <h1>Awesome NFTs Collection</h1>
                <p>Korofuru is home to 5,655 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of toys. </p>
                <div className={Style.collectionProfile_box_middle_box}>
                    {cardArray.map((el, i)=>(
                        <div className={Style.collectionProfile_box_middle_box_item} key={i+1}>
                        <small>Floor Price</small>
                        <p>${i+1}95,4683</p>
                        <span>+ {i+2}11%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default collectionProfile
