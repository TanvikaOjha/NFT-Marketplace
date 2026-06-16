import React from 'react'
import Form from './Form.module.css'
import { HiOutlineMail } from 'react-icons/hi'
import {MdOutlineHttp, MdOutlineContentCopy} from 'react-icons/md'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
import Style from './Form.module.css'
import {Button} from '../../components/componentIndex'
const Form = () => {
  return (
    <div className={Style.Form}>
        <div className={Style.Form_box}>
            <form>
                <div className={Style.Form_box_input}>
                    <label htmlFor="name">Username</label>
                    <input type="text" placeholder="name" className={Style.Form_box_input_userName}/>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="email">Email</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <HiOutlineMail/>
                        </div>
                        <input type="text" placeholder='email*'/>
                    </div>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="description">Description</label>
                    <textarea name="" id="" cols="30" rows="6" placeholder="Something about yourself in your words"></textarea>
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="website">
                        Website
                    </label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <MdOutlineHttp/>
                        </div>
                        <input type="text" placeholder="website"/>
                    </div>
                </div>
                <div className={Style.Form_box_input_social}>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="facebook">Facebook</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialFacebook/>
                            </div>
                            <input type="text" placeholder="http://shoaib"/>
                        </div>
                    </div>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="Twitter">Twitter</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialTwitter/>
                            </div>
                            <input type="text" placeholder="http://shoaib"/>
                        </div>
                    </div> 
                    <div className={Style.Form_box_input}>
                        <label htmlFor="Instagram">Instagram</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <TiSocialInstagram/>
                            </div>
                            <input type="text" placeholder="http://shoaib"/>
                        </div>
                    </div>                                        
                </div>
                <div className={Style.Form_box_input}>
                    <label htmlFor="wallet">Wallet address</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <MdOutlineHttp/>
                        </div>
                        <input type="text" placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898e"/>
                        <div className={Style.Form_box_input_box_icon}>
                            <MdOutlineContentCopy/>
                        </div>
                    </div>
                </div>
                <div className={Style.Form_box_btn}>
                    <Button btnName="Upload Profile" handleClick={()=>{}} className={Style.button}/>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Form
