import React from 'react'

import './header.css';

import image from '../../assets/spoon.png'
import image1 from '../../assets/welcome.png'

export default function Header() {
  return (
   <div id='head'>
               <div id='header'>
                     <p> chase the new flavour </p> <img src={image} alt="" />
                     <p style={ {color : 'golden', lineHeight : '50px'}}> The key to Fine Dining </p>
                     <p> f,mqn zpozjvopzn zvnozvnozzjpojpo cp </p>
                     <button type='button' > EXPLORE MENU </button>
               </div>
               <img src={image1} width="35%" alt="" />
   </div>
  )
}
