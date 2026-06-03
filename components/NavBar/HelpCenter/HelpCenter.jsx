import React from 'react'
import Style from './HelpCenter.module.css';
import Link from 'next/link';

const HelpCenter = () => {
  const helpCenter = [
    {name: "About", link: "about",},
    {name: "Contact Us", link: "contact-us"},
    {name: "Sign Up", link: "sign-up"},
    {name: "Sign In", link: "sign-in"},
    {name: "Subscription", link: "subscription"}
  ];

  return (
    <div className={Style.box}>
      {helpCenter.map((item, index) => (
        <div className={Style.helpCenter}>
        <Link href={{pathname: `/${item.link}`}}> {item.name} </Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter
