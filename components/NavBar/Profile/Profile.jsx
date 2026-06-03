import React from 'react';
import Style from './Profile.module.css';
import Image from 'next/image';
import {FaUserAlt, FaRegImage, FaUserEdit, FaRegEdit} from 'react-icons/fa';
import {MdHelpCenter} from 'react-icons/md';
import {TbDownloadOff, TbDownload} from 'react-icons/tb';

import images from '../../../img';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image src={images.user1} alt="user profile" width={50} height={50} className={Style.profile_account_img}/>
        <div className={Style.profile_account_info}>
          <p>S</p>
          <small>x03849938292020</small>
          </div>
        </div>
        <div className={Style.profile_menu}>
          <div className={Style.profile_menu_one}>
            <div className={Style.profile_menu_one_item}>
              <FaUserAlt/>
              <p><Link href={{pathname: '/myprofile'}}>My Profile</Link></p>
              </div>
              <div className={Style.profile_menu_one_item}>
              <FaRegImage/>
              <p><Link href={{pathname: '/myprofile'}}>My Items</Link></p>
              </div>
              <div className={Style.profile_menu_one_item}>
              <FaRegEdit/>
              <p><Link href={{pathname: '/my-items'}}>Edit Profile</Link></p>
              </div>
              <div className={Style.profile_menu_two}>
                <div className={Style.profile_menu_one_item}>
                <MdHelpCenter/>
                <p><Link href={{pathname: '/help'}}>Help</Link></p>
                </div>
                <div className={Style.profile_menu_one_item}>
                <TbDownload/>
                <p><Link href={{pathname: '/disconnect'}}>Disconnect</Link></p>
                </div></div>
              </div>
              </div>
        </div>  

  )
}

export default Profile
