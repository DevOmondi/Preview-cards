import React from 'react';
import sedans from "../Assets/icon-sedans.svg";
import  suvs from "../Assets/icon-suvs.svg";
import luxury from "../Assets/icon-luxury.svg";

const PreviewCards = () => {
  return (
    <div className='previewCards'>
        {/* Sedan div section */}
        <div className='sedan'>
            
            <img 
            src={sedans} 
            alt='sedan' 
            height={50} 
            width={50}
            >
            </img>
            <h1>SEDANS</h1>
            <p>
                Choose a sedan for its affordability and
                excellent fuel economy. Ideal for cruising 
                in the city or in your next road trip.
            </p>
            <button>Learn more</button>
        </div>
         {/* Suvs div section */}
         <div className='suvs'>
            <img 
            src={suvs} 
            alt='suvs' 
            height={50} 
            width={50}
            >
            </img>
            <h1>SUVS</h1>
            <p>
               Take an SUV for its spacious interior,power and
               versatility.Perfect for your next family vacation
               and off-road<br></br> adventures.
            </p>
            <button>Learn more</button>
        </div>
         {/* Luxury div section */}
         <div className='luxury'>
            <img 
            src={luxury} 
            alt='luxury' 
            height={50} 
            width={50}
            >
            </img>
            <h1>LUXURY</h1>
            <p>
               Cruise in the best car brands without 
               bloated the prices. enjoy the enhanced comfort
               of a luxury rental and arrive in style.
            </p>
            <button>Learn more</button>
        </div>
    </div>
  )
}

export default PreviewCards
