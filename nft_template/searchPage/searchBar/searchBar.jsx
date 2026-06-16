import React from 'react'
import Style from './searchBar.module.css'
import { BsSearch, BsArrowRight } from 'react-icons/bs'
const searchBar = () => {
  return (
    <div className={Style.SearchBar}>
        <div className={Style.SearchBar_box}>Hey SearchBar</div>
        <BsSearch className={Style.SearchBar_box_icon}/>
        <input type='text' placeholder='Type your keyword...'/>
        <BsArrowRight className={Style.SearchBar_box_icon}/>
    </div>
  )
}

export default searchBar
