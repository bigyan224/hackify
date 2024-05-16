import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const hero = () => {
  return (
    
        <h1 className='text-7xl tracking-wide leading-tight text-center  mt-12 bg-transparent'><span className='line-clamp'>The one stop</span><br /><span className='font-bold'> platform</span> for <br /><span className='font-nunito-sans font-bold text-purple-500 tracking-widest underline'>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' HACKATHONS',
        
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'SEMINARS',
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
        </span></h1>
    
  )
}

export default hero