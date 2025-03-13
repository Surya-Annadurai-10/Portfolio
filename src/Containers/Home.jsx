import React, { useContext, useEffect, useRef, useState } from "react";
import ring from "../assets/ring2.mp4";
import { IoLocationSharp } from "react-icons/io5";
import { IoBuildSharp } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DataContext } from "../App";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const context = useContext(DataContext);

  useEffect(() =>{
    gsap.to([videoRef.current] , {
      left : 1-(context.coords.x * 0.06),
      top : 1-(context.coords.y * 0.06)
    })
    
  },[context.coords])
 

  useGSAP(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        
        scrollTrigger :{
          trigger: videoContainerRef.current,
          scroller: "body",
          onToggle: (self) => {
            console.log("toggled. active?", self)
            context.setBlur(self.isActive)
          },
          start: "top top",
          end : "top -50%",
          scrub: 1,
          pin: true,
        }
      });

      tl.to(videoRef.current,{
        scale:4,
        ease : "power3.out",
        duration : 2,
      
        
          // scrollTrigger :{
          //   trigger: videoContainerRef.current,
          //   scroller: "body",
          //   markers: true,
          //   start: "top top",
          //   end : "top -50%",
          //   scrub: 1,
          //   pin: true,
          // }
      },"anim").to(".text" ,{
        scale: 0.3,
        yPercent : -50
      },"anim")

      // document.querySelectorAll(".text").forEach((ele) =>{
      //   tl.to(ele,{
      //     scale:0.3,
      //     ease : "power3.out",
      
      //       scrollTrigger :{
      //         trigger: videoContainerRef.current,
      //         scroller: "body",
      //         markers: true,
      //         start: "top top",
      //         end : "top -50%",
      //         scrub: 1,
      //         pin: true,
      //       }
      //   })
      // })

      // tl.to(".text",{
      //   scale:0.3,
      //   ease : "power3.out",
    
      //     scrollTrigger :{
      //       trigger: videoContainerRef.current,
      //       scroller: "body",
      //       markers: true,
      //       start: "top top",
      //       end : "top -50%",
      //       scrub: 1,
      //       pin: true,
      //     }
      // })
      ScrollTrigger.refresh(); 
    });

    return () => ctx.revert();
  },{scope:wrapperRef});

  return (
    <div>
      <div className="">
        <div ref={wrapperRef} className=" w-full h-screen relative wrapper overflow-hidden">
           

          <div ref={videoContainerRef} className={`relative ${context.blur ?   "visible" : "invisible"} w-full h-full`}>
            {/* <div className='video w-[700px] z-[2] h-[700px] rounded-full -top-[55px]  left-[27%] bg-[#0101015e]  absolute'></div> */}
            <video
              ref={videoRef}
              className="  z-[10] mask w-[100%] h-screen absolute top-0 "
              autoPlay
              loop
              muted
              src={ring}
            ></video>
          </div>
          <h1 ref={nameRef} className={`text text-[7rem] z-[4] hero font-["kalnia"] font-[500] left-[50%] whitespace-nowrap top-[50%] transform -translate-x-1/2 -translate-y-[80%] absolute `}>
            <span className="span">SURYA</span> ANNADURAI
          </h1>
          <div ref={textRef} className={`text absolute  text-3xl text-center z-[4] left-[50%] whitespace-nowrap top-[50%] transform -translate-x-1/2 translate-y-[50%]`}>
            <h3 className="flex items-center justify-center gap-2  text-2xl text-[#b8b8b8]">
              <span>
                <IoBuildSharp />
              </span>{" "}
              FULL STACK DEVELOPER
            </h3>
            <h3 className="flex items-center justify-center gap-2 text-2xl text-[#b8b8b8]">
              {" "}
              <span>
                <IoLocationSharp />
              </span>{" "}
              BASED IN INDIA
            </h3>
          </div>
        </div>
        <div>
          <div className="w-full h-screen bg-[#20165e]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
