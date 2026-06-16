import React from 'react'
import Image from 'next/image';
import Style from './Category.module.css';
import { BsCircleFill } from 'react-icons/bs';
import images from '../../img';
const Category = () => {
    const CategoryArray = [images.creatorbackground1, images.creatorbackground10, images.creatorbackground11, images.creatorbackground2,
      images.creatorbackground4, images.creatorbackground5
    ];
  return (
    <div className={Style.box_category}>
    <div className={Style.category}>
        {CategoryArray.map((el, i) => (
            <div className={Style.category_box} key={i + 1}>
                <Image src={el} alt="Background Image" width={350} height={150} className={Style.category_box_img} objectFit='cover'/>
      <div className={Style.category_box_title}>
        <span><BsCircleFill/></span>
        <div className={Style.category_box_title_info}>
            <h4>Entertainment</h4>
            <small>1995 NFTs</small>
        </div>
      </div>
    </div>
        ))}
    </div>
    </div>
  )
}

export default Category
