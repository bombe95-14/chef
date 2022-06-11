import React from 'react'

import image from '../../assets/spoon.png'
import image1 from '../../assets/LinuxSmall.png' 
import image2 from '../../assets/Node.png'
import image3 from '../../assets/MongoDBSmall.png' 
import image4 from '../../assets/SQLSmall.png'  
import image5 from '../../assets/jQuerySmall.png' 
import image6 from '../../assets/DotNET.png' 
import image7 from '../../assets/entite.png'
import image8 from '../../assets/mysql.png'
import image9 from '../../assets/oracle.png'   
import mavideo from '../../assets/ma_vieo.mp4'

import './Gallery.css'

export default function Gallery() {
  return (   <>
    <div id='gallery'>
           <div>
                    <h1> Photo Gallery </h1> <br/>
                    <p> LUNDI MARDI MERCREDI JEUDI VENDREDI SAMEDI DIMANCHE JANVIER FEVRIER MARS AVRIL 
                    MAI JUIN JUILLET AOUT SEPTEMBRE OCTOBRE NOVEMBRE DECEMMBRE
                    LUNDI MARDI MERCREDI JEUDI VENDREDI SAMEDI DIMANCHE JANVIER FEVRIER MARS AVRIL MAI JUIN 
                    JUILLET AOUT SEPTEMBRE OCTOBRE NOVEMBRE DECEMMBRE </p> <br/>
                    <button type='button' style={{ padding : '15px 10px' }} > View More </button>
           </div>
           <div>
                      <a href="#" onClick={handleClick} >&lt;</a>
                      <div id='parti_1'  >
                                  <img src={image1} alt=""  height='300px' />
                                  <img src={image3} alt="" height='300px' />
                                  <img src={image2} alt="" height='300px' />  
                                
                      </div>

                      <div id='parti_2' style={{ display : 'none' }} >
                               <img src={image4} alt="" height='300px' />
                               <img src={image5} alt="" height='300px' />
                               <img src={image6} alt="" height='300px' />
                      </div> 

                      <div id='parti_3' style={{ display : 'none' }} >
                             <img src={image7} alt="" height='300px' />
                             <img src={image8} alt="" height='300px' />
                             <img src={image9} alt="" height='300px' />
                      </div>
                      <a href="#" onClick={handleClick} >&gt;</a>
           </div>
    </div>
    <div id='video' style={{ position : 'relative', marginBottom : '50px' }}>
                 <video src={mavideo} height='500px' onClick={handleClick} width='80%' ></video>
                 <a href="#">&gt;</a>
    </div>
    </>
  )
}

let part_visib=1
let status_video='play'
const handleClick=(e)=>{
          const element=e.target  
          const val_click=element.textContent  

          if( element.nodeName==='VIDEO' ){
                    element.play()   
                    element.textContent='||'
                    e.preventDefault()
                   // if( element.en )  
          } 
          else{   
                  const visib_current=part_visib
                  if( val_click==='>' ){
                    console.log('on avance')
                    part_visib++
                    part_visib = part_visib>3 ? part_visib - 3 : part_visib
                  } else{
                               console.log('on rentre')
                               part_visib--
                               part_visib = part_visib<1 ? 1 : part_visib
                  }
                  document.getElementById('parti_' + visib_current).style.display='none'
                  document.getElementById('parti_' + part_visib).style.display='block'
                  e.preventDefault()
          }

}