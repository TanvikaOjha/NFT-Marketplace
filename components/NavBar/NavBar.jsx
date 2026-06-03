import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
//import icons
 import {MdNotifications} from 'react-icons/md';
 import {BsSearch} from 'react-icons/bs';
 import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';

//internal imports
import Style from './Navbar.module.css';
import {Discover, HelpCenter, Notification, Profile, SideBar} from './index';
import {Button} from '../componentIndex';
import images from '../../img';

const NavBar = () => {
  //--UseState
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if(btnText == 'Discover') {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  else if (btnText == 'Help Center') {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if(!notification) {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    }  else {
    setNotification(false);
  }};
  const openProfile = () => {
    if(!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }};
    const OpenSideBar = () => {
      if(!openSideMenu) {
        setOpenSideMenu(true);}
        else {          setOpenSideMenu(false);
        }};
    
    return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt='NFT MARKET PLACE' width={100} height={100} />

          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}> 
              <input type='text' placeholder='Search NFT Here...' />
              <BsSearch onClick={() => {}} className={Style.search_icon} /> 
            </div>

          </div>
          </div>
          {/*end of left section*/}
          <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/*Discover menu*/}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
            <div className={Style.navbar_container_right_discover_box}>
              <Discover/>
            </div>
           )}
          </div>
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
            <div className={Style.navbar_container_right_help_box}>
              <HelpCenter/>
            </div>
           )}
          </div>
          {/*NOTIFICATION*/}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications onClick={(e) => openNotification()} className={Style.notify} />
            {notification && <Notification/>}
       </div>
       {/*CREATE BUTTON SECTION*/}
        <div className={Style.navbar_container_right_button}>
          <Button btnName='Create' handleClick={() => {}} />
        </div>

        {/*USER PROFILE SECTION*/}
        <div className={Style.navbar_container_right_profile_box}>
          <div className={Style.navbar_container_right_profile}>
          <Image src={images.user1} alt='Profile' width={40} height={40} onClick={()=>openProfile()} className={Style.navbar_container_right_profile}/>
            
          {profile && <Profile/>}
          </div>
          </div>
          {/*MENU BUTTON FOR SMALL SCREENS*/}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight onClick={() => OpenSideBar()} className={Style.menuIcon} />
          </div>
      </div>
    </div>
    {/*SIDEBAR FOR SMALL SCREENS*/}
    {openSideMenu && (
      <div className={Style.sideBar}>
        <SideBar setOpenSideMenu={setOpenSideMenu} />
      </div>
    )}
    </div>
    
  );
};

export default NavBar
