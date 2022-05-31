import React from 'react'

import './Chef.css'
import image from '../../assets/spoon.png'
import image1 from '../../assets/welcome.png'
import quote from '../../assets/quote.png'
import kevin from '../../assets/sign.png' 

export default function Chef() {
  return (
    <div id='chef'>
            <div style={{border : '2px solid red', marginLeft : '50px'}}> <img src={image1} alt="" width='120%' /> </div><br/>
            <div style={{border : '2px solid red'}} >  
                   <p> Chef Words </p>  <img src={image} alt="" /> <br/><br/>
                   <p> What We Believe In  </p><br/><br/>
                  <div style={{ width : '50%', marginLeft : '200px'}} >
                         <img src={quote} alt="" style={{width : '3em', marginRight : '0.5em', marginBottom : '0.75em'}} />
                         lundi mardi mercredi jeudi janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre                lundi mardi mercredi jeudi   janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre 
                         lundi mardi mercredi jeudi kenfack touatsa tsomedjo ymele kengne janvier fevrier mars avril mai juin juillet aout septembre octobre nomvembre decembre <br/>
                  </div> <br/><br/>
                  <div>
                       <p> Kevin Luo </p>
                       <p> Chef & Founder </p>
                  </div><br/><br/>
                  <img src={kevin} width='150px' alt="" />
                 
            </div>
    </div>

  )
}
