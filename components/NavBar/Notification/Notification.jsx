import React from 'react'
import Image from 'next/image';
import Style from './Notification.module.css';
import images from '../../../img';
  const Notification = () => {
    return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1} alt="user1" width={50} height={50}/>
        </div>
        <div className={Style.notification_box_info}>
          <p><strong>John Doe</strong> liked your NFT.</p>
          
          <span>2 hours ago</span>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification
