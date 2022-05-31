import React from 'react'

import './Specialmenu.css'

import image from '../../assets/spoon.png'
import image1 from '../../assets/menu.png' 

   export default function Specialmenu () {

       const valeur_use={
           vin_beer: [{ nom : 'Chapel Hill Shiraz', element : 'AU | Bottle', prix : 56 },
           { nom : 'Catena Malbee', element : 'AU | Bottle', prix : 59 },
           { nom : 'La Vieillw Rose', element : ' FR | 750 MI', prix : 44 },
           { nom : 'Rhino Pale Ale', element : 'CA | 750 MI', prix : 31 },
           { nom : 'Irish Guinness', element : 'IE | 750 MI', prix : 26 }], 
           cooktails : [ { nom : 'Apero Spritz', element : 'Aperol | Villa Marchesi Prosecco | Soda | 30 MI', prix : 20 },
           { nom : 'Dark \'N\' Stormu', element : 'Dark Rum | Ginger Beer | Slice Of Lime', prix : 16 },
           { nom : 'Daquiri', element : 'Sugar | Rum | Citrus Juice', prix : 10 },
           { nom : 'Old Fashionned', element : 'Bourbon | Brown Sugar | Angostura Bitters', prix : 131 },
           { nom : 'Negroni', element : 'Gin | Sweet Vermouth | Campari | Orange Garnish', prix : 16 }]
       }

  return (   <div className='specialmenu'>

    <div> <p>MENU THAT FITS YOUR PALATTE </p> <img src={image} alt="" /> </div>
    <h2 className='today'> Today's Special </h2>
    
     <div className='second'>
          <div id='left1' width='30%'>
                <h1>Wine  &  Beer</h1> 
                { valeur_use.vin_beer.map( (elt, index)=> <div className='w_b'> <div> <p> {elt.nom} </p> <p> {elt.element} </p> </div> <p> ------ {elt.prix} </p> </div> ) }
          </div>

          <div id='center1' > 
                  <img src={image1} alt="" width='80%' /> <br/><br/> <button type='button' style={{padding : '15px 30px'}} > View More </button>
          </div>

          <div id='right1' >
                   <h1>Cokcktails</h1>
                   { valeur_use.cooktails.map( (elt, index)=> <div className='coq'> <div> <p> {elt.nom} </p> <p> {elt.element} </p> </div> <p> ------ {elt.prix} </p> </div> ) }
          </div>
     </div>

</div>)
}










