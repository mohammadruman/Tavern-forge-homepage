import React from 'react';
import './LogoCarousel.css'; // Import the CSS file for custom animation
import logo1 from '../Utils/CARDANO-THOR-LOGOWORDS-ONLY-WHITE.png'
import logo2 from '../Utils/CC-logo-white.png'
import logo3 from '../Utils/frigid-logo-white.png'
import logo4 from '../Utils/Goombles-logo-light.png'

import logo6 from '../Utils/Snekkies-logo-light.png'
import logo7 from '../Utils/MVPz_white_transparent_bg.png'

const logos = [
   logo2,
  logo1,
 logo4,
   logo6,
  logo3,
  

  logo7,
 
];
const LogoCarousel = () => {
  return (
    <div className="relative  overflow-hidden h-24 w-full my-10 ">
      <div className="flex animate-scroll whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-9 m-4 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
