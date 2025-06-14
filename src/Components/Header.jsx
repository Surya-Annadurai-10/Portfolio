import React, { useContext, useRef } from "react";
import logo from "../assets/logos/hero.png";
import BlackLogo from "../assets/logos/logoBlack.png";
import { GoProjectSymlink } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { DataContext } from "../App";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import {motion} from "motion/react"
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import resume from "../assets/Resume.pdf"
const Header = () => {
  let projectRef = useRef(null);
  let contactRef = useRef(null);
  let resumeRef = useRef(null);
  let headContainerRef = useRef(null)
  const ctx = useContext(DataContext);
  // console.log(ctx);


  useGSAP(() =>{
    let ctx = gsap.context(() =>{
       gsap.from("#link",{
         x:100,
        duration:2.5,
        opacity : 0,
        stagger : 0.2,
        ease:"back.inOut"
       })
    })

    return () => ctx.revert();
  },{scope:headContainerRef})

  const handleMouseEnter = (ele) => {
    console.log("ele", ele);
    // ctx.setShowCursor(false)

    // gsap.to(ele , {
    //   left :ctx.coords.x,
    //   top : ctx.coords.y,
    //   ease : "cubic-bezier(0.19,1,0.22,1)",
    //   duration : 1
    // })
  };

  // const handleMouseLeave = (ele, value) => {
  //   ctx.setShowCursor(true);
  //   gsap.to(ele, {
  //     left: value,
  //     top: 0,
  //     ease: "cubic-bezier(0.19,1,0.22,1)",
  //     duration: 1,
  //   });
  // };

  return (
    // <></>
    <div ref={headContainerRef} className={`w-full overflow-hidden fixed z-[500] ${!ctx.blur ? "backdrop-blur-md" : null }  h-[11vh] flex items-center justify-between px-[2rem]`}>
      <a id="link" href="#" >
     <AnimatePresence
     initial ={{y : 100,scale : 0, opacity : 0}}
     animate ={{y : 0,scale : 1 , opacity : 1 , duration : 1.5, ease : "easeInOut"}}
     exit={{y : -100,scale : 0, opacity : 0}}
     >

     {
        ctx.showWhiteLogo ? <div className="w-[80px] relative active:scale-[0.8] transition-all">
        <img className="w-full rounded-2xl inline-block" src={logo} alt="" />
      </div> : <div className="w-[180px] mt-[1rem] -ml-[3rem]  relative active:scale-[0.8] transition-all">
        <img className="w-full rounded-2xl inline-block" src={BlackLogo} alt="" />
      </div>
      }
     </AnimatePresence>
      </a>

      {ctx.blur ? <div className=' flex   relative font-["Mulish","Helvetica Neue",sans-serif] items-center justify-between gap-10'>
        <a id="link"  href={"#skillsCon"}>
          <div className="flex head gap-1 overflow-hidden hover:bg-[#ff000058] bg-black transition-all active:scale-[0.6]  duration-500  hover:-translate-y-1 cursor-pointer rounded-4xl pr-4 hover:font-bold  items-center  justify-center ">
            <GoProjectSymlink className="text-4xl text-red-200 bg-[#A60002] p-[6px] rounded-full" />
            <h3 className="w-[70px] ">PROJECTS</h3>
          </div>
        </a>
        <a id="link" href={"#Contact_container"}>
          <div className="projects head overflow-hidden  flex gap-1 hover:bg-[#ff000058] bg-black transition-all active:scale-[0.6]  duration-500  hover:-translate-y-1 cursor-pointer rounded-4xl pr-4 hover:font-bold items-center justify-cente">
            <SiMinutemailer className="text-4xl text-red-200 bg-[#A60002] p-[6px] rounded-full" />
            <h3 className="w-[70px]">CONTACT</h3>
          </div>
        </a>
      <a  id="link" href={resume} download={"Surya Annadurai.pdf"}>
      <div className="contact head overflow-hidden  flex gap-1 hover:bg-[#ff000058] bg-black active:scale-[0.6] transition-all duration-500 hover:-translate-y-1 cursor-pointer rounded-4xl pr-4 hover:font-bold items-center justify-center">
          <TbListDetails className="text-4xl text-red-200 bg-[#A60002] p-[6px] rounded-full" />
          <h3 className="w-[70px]">RESUME</h3>
        </div> 
      </a>

        {/* <div
          ref={projectRef}
          className="resume absolute flex gap-1 items-center  justify-center "
        >
          <GoProjectSymlink className="text-4xl bg-red-600 p-[6px] rounded-full" />
          <h3>PROJECTS</h3>
        </div>
        <div
        onClick={() => handleMouseEnter(contactRef.current)}
        // onMouseLeave={() =>handleMouseLeave (contactRef.current , "9.43rem")}
          ref={contactRef}
          className="absolute cursor-pointer left-[9.43rem] flex gap-1  items-center justify-center"
        >
          <SiMinutemailer className="text-4xl bg-red-600 p-[6px] rounded-full" />
          <h3>CONTACT</h3>
        </div>
        <div
          ref={resumeRef}
          className="absolute left-[18.75rem]  flex gap-1 items-center justify-center"
        >
          <TbListDetails className="text-4xl bg-red-600 p-[6px] rounded-full" />
          <h3>RESUME</h3>
        </div> */}
      </div> : null }
      
    </div>
  );
};

export default Header;
