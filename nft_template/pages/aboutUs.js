import React from 'react'
import Image from 'next/image';
import Style from '../styles/aboutUs.module.css'
import {Brand} from '../components/componentIndex';
import images from '../img';

const aboutUs = () => {
    const founderArray = [{name: "Niamh O' Shea", post:"Cofounder and Chief Executive", images: images.founder1},
        {name: "Danien Jame", position: "Co-founder and Chief Executive", images: images.founder2 },
        {name: "Orla Dwyer", position: "Co-founder, Chairman", images: images.founder3},
        {name: "Dara Frazier", position: "Co-founder, Chief Strategy Officer", images: images.founder4},
    ]
  return (
    <div className={Style.aboutUs}>
        <div className={Style.aboutUs_box}>
            <div className={Style.aboutUs_box_hero}>
                <div className={Style.aboutUs_box_hero_left}>
                    <h1>👋About Us</h1>
                    <p>We're impartial and independent. We create distinctive, world-class programmes and content which inform, educate and entertain millions of people around the world.  </p>
                </div>
                <div className={Style.aboutUs_box_hero_right}>
                    <Image src={images.hero}/>
                </div>
            </div>
            <div className={Style.aboutUs_box_title}>
                <h2>⛱ Founder</h2>
                <p>We're impartial and independent. We create distinct world-class programmes and content everyday.</p>
            </div>
            <div className={Style.aboutUs_box_founder}>
              <div className={Style.aboutUs_box_founder_box}>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default aboutUs
