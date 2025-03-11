import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Hero = () => {
    const heroCon = useRef(null);


    

    // useGSAP(() =>{
    //      let ctx  = gsap.context(() =>{
              
    //      })

    //      return () => ctx.revert();
    // },{scope:[heroCon]})

  return (
    <>
    <div ref={heroCon} className='w-full grid place-items-center h-screen bg-black'>
         <h1 className='text-white'>Hero</h1>
    </div>
    </>
  )
}

export default Hero