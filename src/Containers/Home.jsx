import React, { useContext, useEffect, useRef, useState } from "react";
import ring from "../assets/ring.mp4";
import { IoLocationSharp } from "react-icons/io5";
import { IoBuildSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { about, skills } from "../data";
import bgred from "../assets/redbg.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DataContext } from "../App";
// import { html } from "../assets/html.png"
import SkillsCard from "../Components/SkillsCard";

import ProjectSection from "../Components/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const page2Con = useRef(null);
  const aboutRef = useRef(null);
  const craftRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const projectTextRef = useRef(null);
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
          // scrollTrigger: {
          //   trigger: page2Con.current,
          //   scroller: "body",
          //   start: "top 60%",
          //   end: "top 0%",
          //   // markers: true,
          //   // pin: true,
          //   scrub: 1,
          // },
        });

        page2Tl.to(".hellow", {
          translateX: "-926%",
          duration: 15,
          repeat: -1,
          ease: "linear",
        });

        gsap.to(".char span", {
          color: "#D5D5D5",
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: aboutRef.current,
            scroller: "body",
            start: "top 70%",
            end: "top 3%",
            // markers: true,
            scrub: 1,
          },
        });

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

        let craftTl = gsap.timeline({
          scrollTrigger: {
            trigger: craftRef.current,
            scroller: "body",
            start: "top 40%",
            end: "top 0%",

            onEnter: () => console.log("ENTERED"),
          },
        });
        craftTl
          .from(
            ".craftingText  ", // Start state
            {
              y: -100,
              opacity: 0,
              duration: 2,
              ease: "power3.out",
              stagger: 0.2, // Adds a delay between each span's animation
            }
          )
          .to(".craftingText", {
            translateX: "-78%",
            duration: 3,
            scrollTrigger: {
              trigger: craftRef.current,
              scroller: "body",
              start: "top 40%",
              end: "top -100%",
              scrub: 1,
              pin: ".craftingText",
              onEnter: () => console.log("ENTERED"),
            },
          });

        let leftNum = -1600;
        let topNUm = -630;
        // let skillTl2 = gsap.timeline();
        let skillsTl = gsap.timeline({
          scrollTrigger: {
            trigger: skillsRef.current,
            scroller: "body",
            start: "top  center",
          },
        });

        skillsTl
          .from("#skills", {
            y: 400,
            opacity: 0,
            duration: 1.5,

            ease: "power3.out",
            // scrollTrigger:{
            //   trigger : skillsRef.current,
            //   scroller : "body",
            //   start : "top  center",

            // }
          })
          .to(".skillcard", {
            left: () => {
              leftNum = leftNum + 93;
              return leftNum;
            },
            top: () => {
              topNUm = topNUm + 18;
              return topNUm;
            },
            opacity: 1,

            ease: "power3.out",
            duration: 1,
            stagger: 1,
            onComplete: () => {
              console.log("Completed");
            },
            scrollTrigger: {
              trigger: skillsRef.current,
              scroller: "body",
              start: " top top ",
              end: "top -630%",
              scrub: 1,
              // markers:true,
              pin: true,
            },
          });

          gsap.to(".projectsText" , {
            scale:49,
            x:855,
            ease : "power3.out",
            onComplete : () => {
              console.log("Projects entered") 
              projectTextRef.current.style.display = "none"
              projectRef.current.style.backgroundColor = "#fff"
            },
            scrollTrigger :{
              trigger : projectRef.current,
              scroller : "body",
              start : "top 0%",
              end : "top -80%",
              scrub : 1,
              pin : true,
              markers: true,
              onEnterBack : () =>{
                  console.log("Projects entered Back") 
                  projectTextRef.current.style.display = "block"
                  projectRef.current.style.backgroundColor = "#000"
              }
              
            }
          })

        // gsap.from(skillsRef.current , {

        //   ease : "power3.out",
        //   scrollTrigger : {
        //     trigger : skillsRef.current ,
        //     scroller : "body",
        //     start : "top 60%",
        //     end : "top top",
        //     scrub : 1,
        //   }
        // })

        // craftTl.from(".crafting span", {
        //  x : -100,
        //  opacity : 0,
        //  duration : 1,
        //  ease : "power3.out",
        //  stagger : 0.3,
        // //  scrollTrigger : {
        // //   trigger : craftRef.current,
        // //   scroller : "body",
        // //   start : "top 70%",
        // //   end : "top top"
        // //  }
        // });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    },
    { scope: [wrapperRef, craftRef] }
  );

  const splitString = (char, i) => {
    if (
      char + "".toLowerCase() == "Surya" ||
      char + "".toLowerCase() == "Annadurai," ||
      char + "".toLowerCase() == "Full" ||
      char + "".toLowerCase() == "Stack" ||
      char + "".toLowerCase() == "Developer" ||
      char + "".toLowerCase() == "aspiring" ||
      char + "".toLowerCase() == "innovation" ||
      char + "".toLowerCase() == "creativity," ||
      char + "".toLowerCase() == "robust" ||
      char + "".toLowerCase() == "challenges" ||
      char + "".toLowerCase() == "functionality" ||
      char + "".toLowerCase() == "excellence," ||
      char + "".toLowerCase() == "clean," ||
      // char+"".toLowerCase() == "clean,"||
      char + "".toLowerCase() == "efficient," ||
      char + "".toLowerCase() == "scalable"
    ) {
      return (
        <div key={`${char}+@${i}`}>
          <strong>
            <span className="hover:scale-[1.5] text-[#515151]">{`${char} `}</span>
          </strong>
        </div>
      );
    } else {
      return (
        <div key={`${char}-${i}`} className="overflow-hidden">
          <span className="hover:scale-[1.1] text-[#515151]">{`${char} `}</span>
        </div>
      );
    }
  };

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
          <div
            ref={page2Con}
            className="w-full  h-[150vh]   overflow-x-hidden  "
          >
            <div className="backdrop-blur-md vanakkam">
              <h1 className="hellow ml-[3rem] mt-[5vh] flex items-center justify-start text-[19rem] font-['race'] whitespace-nowrap">
                <span> &#x2022; &nbsp;Hello &nbsp; </span>
                <span> &#x2022; &nbsp; Vanakkam &nbsp; </span>
                <span> &#x2022; &nbsp; Namaste &nbsp; </span>
                <span> &#x2022; &nbsp;Hello &nbsp; </span>
                <span> &#x2022; &nbsp; Vanakkam &nbsp; </span>
                <span> &#x2022; &nbsp; Namaste &nbsp; </span>
                <span> &#x2022; &nbsp;Hello &nbsp; </span>
                <span> &#x2022; &nbsp; Vanakkam &nbsp; </span>
                <span> &#x2022; &nbsp; Namaste &nbsp; </span>
              </h1>
            </div>
            <div
              ref={aboutRef}
              onMouseEnter={() => {
                context.setShowCursor2(true);
                context.setShowCursor(false);
              }}
              onMouseLeave={() => {
                context.setShowCursor2(false);
                context.setShowCursor(true);
              }}
              className="w-[100%] mt-[12rem] m-auto "
            >
              <h2 className="char p-[5rem] flex flex-wrap gap-2 text-4xl font-['Mulish','Helvetica Neue',sans-serif]">
                {about.split(" ").map((char, i) => splitString(char, i))}
              </h2>
            </div>
          </div>
          <div ref={craftRef} className="w-full h-[155vh] relative">
            <div>
              <img
                className="absolute top-0 right-0 w-full h-full rotate-z-180 z-[0] shadow-[0px_0px_50px_50px_black]"
                src={bgred}
                alt=""
              />
              <div className="absolute top-0 right-0 w-full h-full  bg-linear-to-t from-black via-[#0000007a] z-[1] to-[#000000c8] to-95%"></div>
            </div>

            <div className="w-full  h-full flex">
              <h1 className=" z-[20] leading-[22rem] overflow-hidden absolute flex   gap-[10rem]  ml-[4.3rem] craftingText  font-['milker']">
                <span className="child  text-[18rem] ">Crafting</span>
                <span className="child text-[18rem] ">the</span>
                <span className="child text-[18rem] ">web</span>
                <span className="child text-[18rem] ">with</span>
                <span className="child text-[18rem] ">these</span>
                <span className="child text-[18rem] ">Skills</span>
              </h1>
            </div>

            {/* <div className="craft_slide z-10  left-0  top-1/2 transform -translate-x-0 -translate-y-1/2 absolute text-white text-[16vw] px-[5rem] flex items-center justify-start gap-15 whitespace-nowrap font-['milker'] ">
              <div className="crafting   flex items-center justify-center ">
                    <p  className="craft">C</p>
                    <p className="craft">r</p>
                    <p className="craft">a</p>
                    <p className="craft">f</p>
                    <p className="craft">t</p>
                    <p className="craft">i</p>
                    <p className="craft">n</p>
                    <p className="craft">g</p>

                  

                {"Crafting".split("").map((ele, i) => {
                  return (
                    <span id="span" className="" key={`${ele}_${i}`}>
                      {ele}
                    </span>
                  );
                })}
              </div>

              {"the Web with These Skills".split(" ").map((ele, i) => (
                <div key={`${ele}=${i}`}>
                  <h1>{ele}</h1>
                </div>
              ))}
            </div> */}
          </div>
          <div
            ref={skillsRef}
            className="w-full flex rounded-3xl overflow-hidden relative justify-center items-center  h-screen bg-[black]"
          >
            <h1
              id="skills"
              className="text-[15vw] font-bold tracking-tight skills "
            >
              SKILLS
            </h1>

            <div
              className=" flex skillcardCon items-center  justify-start gap-[5rem]
              absolute bg-[red]  right-[0%] bottom-[0%]"
            >
              {skills.map((ele, i) => {
                let num;
                if (i < 9) {
                  num = `0${i + 1}`;
                } else {
                  num = i + 1;
                }
                // if(i == 0){

                // }
                return (
                  <div
                    key={`${ele.img}_${i}`}
                    className="bg-[#00000000] opacity-0 absolute  backdrop-blur-md  skillcard  z-[5]  border border-[#5c5c5c] text-white  flex items-center justify-center flex-col gap-5 w-[20vw] h-[50vh] rounded "
                  >
                    <h1 className="font-['milker']  absolute left-0 -z-[10] bottom-[85%] num text-[5vw]">
                      {num}
                    </h1>
                    <div className=" bg-[#ffffff53] w-[70%] h-[60%] rounded-full grid place-items-center">
                      <img className="w-[70%]" src={ele.img} alt="" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">{ele.heading}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div ref={projectRef} className="">
            <div className="w-full grid place-items-center h-[90vh] text-center font-[700]">
              <h1 ref={projectTextRef} className="projectsText text-[15vw] uppercase ">Projects</h1>
            </div>
          </div>
          <div className="w-full text-black  grid place-items-center h-screen bg-white">
               <h1 className="text-[5rem]">Project cards</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
