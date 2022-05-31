import React from 'react'

import image from '../../assets/spoon.png'
import image1 from '../../assets/JavaScriptSmall.png' 
import './aboutus.css';

export default function Aboutus() {
  return (
    <div id='about'>
            <div id='left'>
                <h1>Aout Us</h1> <img src={image} alt="" />
                <div>
                 lundi mardi mercredi jeudi janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre                lundi mardi mercredi jeudi   janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre 
                 lundi mardi mercredi jeudi kenfack touatsa tsomedjo ymele kengne janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre <br/>
                 <br/><br/><br/><br/>
                 <button type='button' > KNOW MORE </button>
                </div>
                
            </div>
                
            <div id='center'> 
                  <img src={image1} alt="" height='400px' /> 
            </div>
            
            <div id='right'>
                 <h1>Our History</h1> <img src={image} alt="" />
                 <div>
                 lundi mardi mercredi jeudi janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre                lundi mardi mercredi jeudi   janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre 
                 lundi mardi mercredi jeudi kenfack touatsa tsomedjo ymele kengne janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre <br/> <br/><br/><br/><br/>
                 <button type='button' > KNOW MORE </button>
                 </div>
                 
            </div>  
    </div>
  )
}
