import React, { useContext, useEffect, useRef, useState } from "react";
import ring from "../assets/ring.mp4";
import { IoLocationSharp } from "react-icons/io5";
import { IoBuildSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { about } from "../data";

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
  const page2Con = useRef(null);
  const aboutRef = useRef(null);
  const context = useContext(DataContext);

  useEffect(() => {
    // gsap.to([videoRef.current] , {
    //   left : 1-(context.coords.x * 0.05),
    //   top : 1-(context.coords.y * 0.05)
    // })
  }, [context.coords]);

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.to(".svg", {
          rotate: 360,
          repeat: -1,
          duration: 10,
          ease: "linear",
        });

        gsap.from([".textCon1 span", ".textCon2 span"], {
          y: 200,
          duration: 2.5,
          opacity: 0,
          delay: 1,
          stagger: 0.1,
          ease: "power3.out",
        });

        //  gsap.from(".textCon2 span",{
        //   y:200,
        //   duration :2.5,
        //   opacity : 0,
        //   delay:2,
        //   stagger : 0.1,
        //     ease : "power3.out"
        //  })
        gsap.from(".tag", {
          y: 100,
          duration: 2.5,
          stagger: 0.3,
          delay: 2,
          ease: "power3.out",
        });

        gsap.to(videoRef.current, {
          repeat: -1,
          rotate: -360,
          duration: 2.5,
          ease: "linear",
        });

        gsap.from(videoRef.current, {
          y: -1000,
          opacity: 0,

          // delay:2.6,
          duration: 2.5,
          // ease: "bounce.out",
          ease: "power3.out",
        });

        let page2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: page2Con.current,
            scroller: "body",
            start: "top 18%",
            end: "top -200%",
            markers: true,
            pin: true,
            scrub: 1,
          },
        });

        page2Tl
          .to(".hellow", {
            translateX: "-243%",
            duration: 3,
          })
          .to(".char span", {
            color: "#D5D5D5",
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: aboutRef.current,
              scroller: "body",
              start: "top -140%",
              end: "top -200%",
              markers: true,
              scrub: 1,
            },
          });

        // let aboutTl = gsap.timeline();

        // aboutTl.to(".char span" , {
        //  y:100,
        //   duration:1 ,
        //   ease : "power3.out",
        //   stagger : 0.001,
        //   scrollTrigger:{
        //     trigger : aboutRef.current,
        //     scroller : "body",
        //     start : "top 75%",
        //     end : "top 30%",
        //     markers :true,
        //     scrub : 1
        //   }
        // })

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: videoContainerRef.current,
            scroller: "body",
            onToggle: (self) => {
              console.log("toggled. active?", self);
              context.setBlur(self.isActive);
            },
            start: "top top",
            end: "top -50%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(
          videoRef.current,
          {
            scale: 4,
            ease: "power3.out",
            duration: 2,
          },
          "anim"
        ).to(
          ".text",
          {
            scale: 0.3,
            yPercent: -50,
          },
          "anim"
        );

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
    },
    { scope: wrapperRef }
  );


  const splitString = (char) =>{
 
    if(
  char+"".toLowerCase() == "Surya"||
  char+"".toLowerCase() == "Annadurai,"||
  char+"".toLowerCase() == "Full"||
  char+"".toLowerCase() == "Stack"||
  char+"".toLowerCase() == "Developer"||
  char+"".toLowerCase() == "aspiring"||
  char+"".toLowerCase() == "innovation"||
  char+"".toLowerCase() == "creativity,"||
  char+"".toLowerCase() == "robust"||
  char+"".toLowerCase() == "challenges"||
  char+"".toLowerCase() == "functionality"||
  char+"".toLowerCase() == "excellence,"||
  char+"".toLowerCase() == "clean,"||
  // char+"".toLowerCase() == "clean,"||
  char+"".toLowerCase() == "efficient,"||
  char+"".toLowerCase() == "scalable"

    ){
     return <>
      <div >
        <strong>
          <span className="hover:scale-[1.5] text-[#676767]">{`${char} `}</span>
        </strong>
      </div>
     </>
    }else{
      return <>
      <div className="overflow-hidden">
         <span className="hover:scale-[1.1] text-[#676767]">{`${char} `}</span>
      </div>
      </>
    }
  }

  return (
    <div className="">
      <div className="flex absolute top-[35%] -left-15 z-50 rotate-z-90 text-xl font-['Mulish','Helvetica Neue',sans-serif]   gap-2 overflow-x-hidden bg-[#ff000037]    rounded-4xl pr-4 py-1  items-center  justify-center ">
     
        <MdExplore className="text-4xl text-red-200 bg-[#A60002] p-[6px] rounded-full" />
        <h1 className=" font-bold text-red-300">Explore More</h1>
      </div>
      <div className=" overflow-hidden">
        <div ref={wrapperRef} className=" w-full h-screen relative wrapper ">
          <div
            ref={videoContainerRef}
            className={`relative ${
              context.blur ? "visible" : "invisible"
            } w-full h-full`}
          >
            {/* <div className='video w-[700px] z-[2] h-[700px] rounded-full -top-[55px]  left-[27%] bg-[#0101015e]  absolute'></div> */}
            <video
              ref={videoRef}
              className="   z-[10] mask w-[100%] h-screen absolute top-0 "
              autoPlay
              loop
              muted
              src={ring}
            ></video>
          </div>
          <h1
            ref={nameRef}
            className={`text w-[100%]  gap-10  flex items-center justify-center   z-[4] font-['Mulish','Helvetica Neue',sans-serif]  hero font-[800] left-[50%] whitespace-nowrap top-[50%] transform -translate-x-1/2 -translate-y-[80%] absolute `}
          >
            <div className="flex textCon1  overflow-hidden text-[16vw] leading-[15rem] gap-1 items-center justify-center font-['stretch']">
              <span>S</span>
              <span>U</span>
              <span>R</span>
              <span>Y</span>
              <span>A</span>
            </div>
            <div className="flex overflow-hidden textCon2 text-[16vw] leading-[15rem]  gap-1  items-center justify-center font-['stretch']">
              <span>A</span>
              <span>N</span>
              <span>N</span>
              <span>A</span>
              <span>D</span>
              <span>U</span>
              <span>R</span>
              <span>A</span>
              <span>I</span>
            </div>
          </h1>
          <div
            ref={textRef}
            className={`text absolute  text-3xl  z-[4] left-[50%] whitespace-nowrap top-[55%] transform -translate-x-1/2 translate-y-[50%]`}
          >
            <div className="overflow-hidden">
              <h3 className="flex tag items-center justify-start gap-2  text-2xl text-[#b8b8b8]">
                <span>
                  <BsPersonWorkspace />
                </span>
                FULL STACK DEVELOPER
              </h3>
            </div>
            <div className="overflow-hidden">
              <h3 className="flex tag items-center justify-start gap-2 text-2xl text-[#b8b8b8]">
                <span>
                  <MdMyLocation />
                </span>
                BASED IN INDIA
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-full svg   absolute   -bottom-[3%] -right-[1.5%]">
          <div className="w-[10px] h-[10px] rounded-full bg-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"></div>
          <svg width={252} height={252}>
            <path
              id="path"
              fill="transparent"
              d="
             M 126 126
             m 63 , 0
             a 63 , 63  0 1,0 -126 , 0
             a 63 , 63  0 1,0 126 , 0
             "
            />
            <text>
              <textPath fill="white" href="#path">
                {" "}
                SCROLL DOWN TO DIVE IN &nbsp; &#x2022; &nbsp; SCROLL DOWN TO
                DIVE IN &nbsp; &#x2022; &nbsp;
              </textPath>
            </text>
          </svg>
        </div>
        <div>
          <div ref={page2Con} className="w-full  h-[170vh]   overflow-x-hidden  ">
            <h1 className="hellow ml-[3rem] mt-[5vh] flex items-center justify-start text-[19rem] font-['race'] whitespace-nowrap">
              <span> &#x2022; &nbsp;Hello &nbsp; </span>
              <span> &#x2022; &nbsp; Vanakkam &nbsp; </span>
              <span> &#x2022; &nbsp; Namaste &nbsp; </span>
            </h1>
            <div ref={aboutRef} onMouseEnter={() => {context.setShowCursor2(true)
              context.setShowCursor(false)
            }} 
            onMouseLeave={() =>{ context.setShowCursor2(false)
              context.setShowCursor(true)
            } }
            className="w-[100%] mt-[12rem] m-auto ">
              <h2 className="char p-[5rem] flex flex-wrap gap-2 text-4xl font-['Mulish','Helvetica Neue',sans-serif]">
                {about.split(" ").map((char) => (splitString(char)))}
              </h2>
            </div>
          </div>
          <div className="w-full h-screen bg-[purple] "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
