import React from 'react';
import Image from 'next/image';

import Style from './HeroSection.module.css';
import images from '../../img';
import { Button } from '../componentIndex';
const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      < div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell extraordinary NFTs</h1>
          <p>Explore digital art, gaming items, and more. Join our vibrant community of creators and collectors today!</p>
          <Button btnName='Explore Now' />
          </div>
          <div className={Style.heroSection_box_right}>
            <Image src={images.hero} alt='hero image' width={600} height={600} />

          </div>
          </div>
    </div>
  )
}

export default HeroSection
