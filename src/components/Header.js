import React from 'react'
import logo from '../Utils/Group 3253.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-  '>
         <div className=''>
        <img loading='lazy'  src={logo} alt='logo' className='h-[52px] w-[132px] my-[19px] ml-[40px]'/>
      </div>
      <div className='font-bold'>
        <button className='my[20px] x-[1225px] w-[175px] h-[50px] bg-amber rounded-[5px] mr-8 '>contact us</button>
      </div>
     
    </div>
  )
}

export default Header
