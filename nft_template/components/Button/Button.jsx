import React from 'react';
import Style from './Button.module.css';

const Button = ({btnName, handleClick, icon, classStyle}) => {
  return (
    <div  >
      <button className={`${Style.button} ${classStyle}`} onClick={handleClick}>
         {icon}
        {btnName}
        </button>
    </div>
  )
}

export default Button
