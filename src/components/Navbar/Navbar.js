import './Navbar.css';

import React from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import image from '../../assets/gericht.png'

 function Navbar() {

const [toggle, setToggle] = React.useState(false)

  return (
    <div className="nav">
     <img src={image} alt="" />
      <ul id='ul1'>
           <li><a href="/home"> HOME </a></li>
           <li><a href="/about"> ABOUT </a></li>
           <li><a href="/page"> MENU </a></li>
           <li><a href="/page"> AWARDS </a></li>
           <li><a href="/contact"> CONTACT </a></li>
           <li><a href="/blog"> BLOG </a></li>
           <li><a href="/land"> LANDING </a></li>
      </ul>
      <ul id='ul2'>
      <li><span > Log In / Registration </span></li>
      <li><span > BOOK TABLE </span></li>
      </ul>
          
            <div className='mini'>
                <GiHamburgerMenu color='red'  fontSize={25} onClick={ ()=>{ setToggle(true) } } />
                {toggle && (
               <div className='kind_de_mini'>
                    <MdOutlineRestaurantMenu color='white' fontSize={35} onClick={ ()=>{ setToggle(false) } } />
                    <ul>
                         <li><span> HOME </span></li>
                         <li><span > ABOUT </span></li>
                         <li><span> MENU </span></li>
                         <li><span > AWARDS </span></li>
                         <li><span > CONTACT </span></li>
                         <li><span > BLOG </span></li>
                         <li><span > LANDING </span></li>
                    </ul>
               </div>
               )}
            </div>
    </div>
  );
}

export default Navbar;