import React, { useContext, useRef } from "react";
import logo from "../assets/hero.png";
import { GoProjectSymlink } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { DataContext } from "../App";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import {motion} from "motion/react"
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  let projectRef = useRef(null);
  let contactRef = useRef(null);
  let resumeRef = useRef(null);
  const ctx = useContext(DataContext);
  // console.log(ctx);

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

  const handleMouseLeave = (ele, value) => {
    ctx.setShowCursor(true);
    gsap.to(ele, {
      left: value,
      top: 0,
      ease: "cubic-bezier(0.19,1,0.22,1)",
      duration: 1,
    });
  };

  return (
    <div className={`w-full fixed z-[5] ${!ctx.blur ? "backdrop-blur-md" : null }  h-[11vh] flex items-center justify-between px-[2rem]`}>
      <Link to={""}>
      <div className="w-[80px] relative active:scale-[0.8] transition-all">
        <img className="w-full rounded-2xl inline-block" src={logo} alt="" />
      </div>
      </Link>
      <div className=' flex  relative font-["Mulish","Helvetica Neue",sans-serif] items-center justify-between gap-10'>
        <Link to={"/projects"}>
          <div className="flex gap-1 hover:bg-[#ff000058] bg-black transition-all active:scale-[0.6]  duration-500  hover:-translate-y-1 cursor-pointer rounded-4xl pr-4 hover:font-bold  items-center  justify-center ">
            <GoProjectSymlink className="text-4xl  bg-red-600 p-[6px] rounded-full" />
            <h3 className="w-[70px] ">PROJECTS</h3>
          </div>
        </Link>
        <Link to={"/contact"}>
          <div className="projects flex gap-1 hover:bg-[#ff000058] bg-black transition-all active:scale-[0.6]  duration-500  hover:-translate-y-1 cursor-pointer rounded-4xl pr-4 hover:font-bold items-center justify-center">
            <SiMinutemailer className="text-4xl bg-red-600 p-[6px] rounded-full" />
            <h3 className="w-[70px]">CONTACT</h3>
          </div>
        </Link>
        <div className="contact flex gap-1 hover:bg-[#ff000058] bg-black active:scale-[0.6] transition-all duration-500 hover:-translate-y-1 cursor-pointer rounded-4xl pr-4 hover:font-bold items-center justify-center">
          <TbListDetails className="text-4xl bg-red-600 p-[6px] rounded-full" />
          <h3 className="w-[70px]">RESUME</h3>
        </div>

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
      </div>
    </div>
  );
};

export default Header;
