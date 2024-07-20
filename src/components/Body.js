
import React from 'react'
import Typing from '../function/Typing'
import LogoCarousel from '../function/LogoCarousel'


const Body = () => {
  return (
<div className='static'>
    <div class=" text-4xl sm:text-5xl font-bold text-white my-[70px] text-center    ">
  WE <Typing words={['DESIGN', 'CODE', 'CRAFT']}  /> WEB <br/>
  <span class="text-orange text-5xl sm:text-6xl    ">EXPERIENCES</span>
<span class="text-[19px] text-sm font-sans my-1 block tracking-[1.43px]  text-gray">Minting, Staking, Gaming, Web Apps, <br/> Website Development and much more.</span>
        
        </div >
          <div className='flex justify-center my-1 relative -mt-12  '>
        <button className='bg-orange text-white py-2 px-4 m-4 rounded-lg h-[50px]  font-bold w-[185px]  '>Get Started</button>
        <button className=" px-4 m-4 rounded-lg text-white border font-bold border-amber w-[185px]">Explore our work</button>

        </div>
       
          <LogoCarousel /> 
     </div>
  )
};

export default Body
