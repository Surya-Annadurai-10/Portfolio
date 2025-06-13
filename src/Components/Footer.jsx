import React from 'react'
import foot from "../assets/foot.jpg"
import instagram from "../assets/instagram.jpg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/Github.png"

const Footer = () => {
  return (
 <div  className='w-full flex items-center text-black flex-col justify-evenly h-[50vh] bg-[#FFFFFF]'>
    <div className='w-full flex items-center text-black justify-evenly h-[50vh] bg-[##FFFFFF]'>
       <div className='flex items-center justify-center flex-col '>
        <h2 className='font-semibold'>No © copyright issues.</h2>
        <p>Feel free to copy. If you need any help, ping me!</p>
       </div >
         <div className='flex items-center justify-center gap-2 flex-col '>
        <h2 className='sacro text-6xl text-black'>Surya Annadurai</h2>
        <p>Made with <span className='text-2xl'>♥️ ️</span> in India</p>
       </div>
         <div className='flex gap-2 items-center justify-center flex-col '>
        <h2>You can find me Everywhere</h2>
        <div className='flex items-center justify-center gap-2'>
          <a href="www.linkedin.com/in/surya-annadurai">
            <img className='w-[30px]' src={linkedin} alt="" />
          </a>
        <a href="">
            <img className='w-[30px]' src={instagram} alt="" />
        </a>
       <a href="https://github.com/Surya-Annadurai-10/Surya-Annadurai-10">
            <img className='w-[50px]' src={github} alt="" />
       </a>
        </div>
       </div>
       
    </div>
    <div>
      <img src={foot} alt="" />
    </div>
 </div>
  )
}

export default Footer