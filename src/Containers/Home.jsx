import React, { useContext, useEffect, useRef, useState } from "react";
import ring from "../assets/ring.mp4";
import { IoLocationSharp } from "react-icons/io5";
import { IoBuildSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { about, projectsData, skills } from "../data";
import { MdClear } from "react-icons/md";
import bgred from "../assets/redbg.jpg";
import gsap from "gsap";
import logo from "../assets/logos/hero.png";
import resume from "../assets/Resume.pdf"

import coffee from "../assets/coffee.webp";
import foot from "../assets/foot.jpg";
import instagram from "../assets/instagram.jpg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/Github.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DataContext } from "../App";
import { navData } from "../data";
// import { html } from "../assets/html.png"
import SkillsCard from "../Components/SkillsCard";
import expense from "../assets/projectsImg/expense.png";
// import ProjectSection from "../Components/ProjectSection";
import ProjectCard from "../Components/ProjectCard";
// import Contact from "../Components/ContactSection.jsx";
// import ContactSection from "../Components/ContactSection.jsx";

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
  const craftRef2 = useRef(null);
  const skillsRef = useRef(null);
  const skillsRef2 = useRef(null);
  const skillsRef3 = useRef(null);
  const projectRef = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);
  const projectTextRef2 = useRef(null);
  const projectTextRef3 = useRef(null);
  const projectTextRef = useRef(null);
  const ProjectConRef = useRef(null);
  const ProjectCardCon = useRef(null);
  const contactRef = useRef(null);
  const innerBoxRef = useRef([]);
  const context = useContext(DataContext);
  // const ctx = useContext(DataContext);

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
          duration: 20,
          repeat: -1,
          ease: "linear",
        });

        gsap.to(".thanks", {
          translateX: "-38%",
          duration: 20,
          repeat: -1,
          ease: "linear",
        });

        gsap.to(".thanks2", {
          translateX: "38%",
          duration: 20,
          repeat: -1,
          ease: "linear",
        });

        // gsap.from("",{

        // })

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

            // onEnter: () => console.log("ENTERED"),
          },
        });

        craftTl
          .from(
            ".craftingText  ", // Start state
            {
              y: 100,
              opacity: 0,
              duration: 2,
              ease: "power3.out",
              stagger: 0.2, // Adds a delay between each span's animation
            }
          )
          .to(".craftingText", {
            translateX: "-78%",
            // delay : 2.5,
            duration: 3,
            scrollTrigger: {
              trigger: craftRef.current,
              scroller: "body",
              start: "top 30%",
              end: "top -90%",
              scrub: 1,
              pin: ".craftingText",
              // onEnter: () => console.log("ENTERED"),
            },
          });


           let craftTl2 = gsap.timeline({
          scrollTrigger: {
            trigger: craftRef2.current,
            scroller: "body",
            start: "top 40%",
            end: "top 0%",

            // onEnter: () => console.log("ENTERED"),
          },
        });

        craftTl2
          .from(
            ".craftingText2  ", // Start state
            {
              y: 100,
              opacity: 0,
              duration: 2,
              ease: "power3.out",
              stagger: 0.2, // Adds a delay between each span's animation
            }
          )
          .to(".craftingText2", {
            translateX: "-86%",
            // delay : 2.5,
            duration: 3,
            scrollTrigger: {
              trigger: craftRef2.current,
              scroller: "body",
              start: "top 30%",
              end: "top -90%",
              scrub: 1,
              pin: ".craftingText2",
              // onEnter: () => console.log("ENTERED"),
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
            // markers:true
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
              leftNum = leftNum + 91;
              return leftNum;
            },
            top: () => {
              topNUm = topNUm + 18;
              return topNUm;
            },
            opacity: 1,
            delay: 2,
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


        let leftNum2 = -830;
        let topNUm2 = -700;
        let skillsTl2 = gsap.timeline({
          scrollTrigger: {
            trigger: skillsRef2.current,
            scroller: "body",
            start: "top  center",
            // markers:true
          }
        });

        skillsTl2
          .from("#skills2", {
            y: 400,
            opacity: 0,
            duration: 1.5,

            ease: "power3.out",
          })
          .to(".skillcard2", {
            left: () => {
              leftNum2 = leftNum2 + 45;
              return leftNum2;
            },
            top: () => {
              topNUm2 = topNUm2 + 28;
              return topNUm2;
            },
            opacity: 1,
            delay: 2,
            ease: "power3.out",
            duration: 1,
            stagger: 1,
            onComplete: () => {
              console.log("Completed");
            },
            scrollTrigger: {
              trigger: skillsRef2.current,
              scroller: "body",
              start: " top top ",
              end: "top -630%",
              scrub: 1,
              // markers:true,
              pin: true,
            },
          });



             let leftNum3 = -380;
        let topNUm3 = -740;
        let skillsTl3 = gsap.timeline({
          scrollTrigger: {
            trigger: skillsRef3.current,
            scroller: "body",
            start: "top  center",
            // markers:true
          }
        });

        skillsTl3
          .from("#skills3", {
            y: 400,
            opacity: 0,
            duration: 1.5,

            ease: "power3.out",
          })
          .to(".skillcard3", {
            left: () => {
              leftNum3 = leftNum3 + 15;
              return leftNum3;
            },
            top: () => {
              topNUm3 = topNUm3 + 32;
              return topNUm3;
            },
            opacity: 1,
            delay: 2,
            ease: "power3.out",
            duration: 1,
            stagger: 1,
            onComplete: () => {
              console.log("Completed");
            },
            scrollTrigger: {
              trigger: skillsRef3.current,
              scroller: "body",
              start: " top top ",
              end: "top -630%",
              scrub: 1,
              // markers:true,
              pin: true,
            },
          });




        gsap.to(".projectsText", {
          scale: 49,
          x: 879,
          ease: "power3.out",
          onComplete: () => {
            console.log("Projects entered");
            context.setEnteredProjects(true);
            // context.setShowCursor2(true);
            context.setShowCursor(false);
            context.setShowWhiteLogo(false);
            projectTextRef.current.style.display = "none";
            projectRef.current.style.backgroundColor = "#F1F1F1";
          },
          scrollTrigger: {
            trigger: projectRef.current,
            scroller: "body",
            start: "top 0%",
            end: "top -80%",
            scrub: 1,
            pin: true,
            // markers: true,
            onEnterBack: () => {
              console.log("Projects entered Back");
              context.setEnteredProjects(false);
              // context.setShowCursor2(false);
              context.setShowCursor(true);
              // context.setShowWhiteLogo(false);
              context.setShowWhiteLogo(true);
              projectTextRef.current.style.display = "block";
              projectRef.current.style.backgroundColor = "#000";
            },
          },
        });

         gsap.to(".projectsText2", {
          scale: 49,
          x: 207,
          ease: "power3.out",
          onComplete: () => {
            console.log("Projects entered");
            context.setEnteredProjects(true);
            // context.setShowCursor2(true);
            context.setShowCursor(false);
            context.setShowWhiteLogo(false);
            projectTextRef2.current.style.display = "none";
            projectRef2.current.style.backgroundColor = "#F1F1F1";
          },
          scrollTrigger: {
            trigger: projectRef2.current,
            scroller: "body",
            start: "top 0%",
            end: "top -80%",
            scrub: 1,
            pin: true,
            // markers: true,
            onEnterBack: () => {
              console.log("Projects entered Back");
              context.setEnteredProjects(false);
              // context.setShowCursor2(false);
              context.setShowCursor(true);
              // context.setShowWhiteLogo(false);
              context.setShowWhiteLogo(true);
              projectTextRef2.current.style.display = "block";
              projectRef2.current.style.backgroundColor = "#000";
            },
          },
        });

          gsap.to(".projectsText3", {
          scale: 49,
          x: 442,
          ease: "power3.out",
          onComplete: () => {
            console.log("Projects entered");
            context.setEnteredProjects(true);
            // context.setShowCursor2(true);
            context.setShowCursor(false);
            context.setShowWhiteLogo(false);
            projectTextRef3.current.style.display = "none";
            projectRef3.current.style.backgroundColor = "#F1F1F1";
          },
          scrollTrigger: {
            trigger: projectRef3.current,
            scroller: "body",
            start: "top 0%",
            end: "top -80%",
            scrub: 1,
            pin: true,
            // markers: true,
            onEnterBack: () => {
              console.log("Projects entered Back");
              context.setEnteredProjects(false);
              // context.setShowCursor2(false);
              context.setShowCursor(true);
              // context.setShowWhiteLogo(false);
              context.setShowWhiteLogo(true);
              projectTextRef3.current.style.display = "block";
              projectRef3.current.style.backgroundColor = "#000";
            },
          },
        });

        let projectConTl = gsap.timeline({
          scrollTrigger: {
            trigger: ProjectConRef.current,
            scroller: "body",
            start: "top top",
            end: "top -200%",
            // markers : true,
            pin: true,
            scrub: 1,
          },
        });
        let topPro = 0;
        let scalePro = 2.3;
        projectConTl.to(".projectCard", {
          //  top: () => {
          //   topPro = topPro + 15;
          //   return topPro;
          // },
          // scale : () =>{
          //    scalePro = scalePro  +  0.1;
          //    return scalePro;
          // },
          top: 60,
          duration: 1,
          ease: "power3.out",
          stagger: 1,
        });
        let count = 0;
        let ContactRefTl = gsap.timeline({
          scrollTrigger: {
            trigger: contactRef.current,
            scroller: "body",
            start: "top top",
            end: "100% 50%",
            // markers : true,
            pin: true,
            scrub: 2,
            onEnterBack: () => {
              // console.log("Scrub Completed" , count++);
              context.setShowWhiteLogo(false);
            },
          },
        });

        ContactRefTl.to(
          "#top_heading",
          {
            top: "-60%",
          },
          "abc"
        )
          .to(
            "#bottom_heading",
            {
              bottom: "-50%",
            },
            "abc"
          )
          .to(
            "#top_h1",
            {
              top: "115%",
            },
            "abc"
          )
          .to(
            "#bottom_h1",
            {
              top: "-20%",
            },
            "abc"
          )
          .from(
            "#coffeeText",
            {
              y: 300,
              opacity: 0,
              onStart: () => {
                console.log("bottom Completed", count++);
                context.setShowWhiteLogo(true);
              },
            },
            "abc"
          );


          let navTl = gsap.timeline({paused:true});
         let navOpen = false;
          navTl.from("#navPop" ,{
                x : "-100%",
                duration : 1,
                opacity : 0,
                ease : "back.inOut"
          },"a").from("#links > a" , {
                // x :-100,
                duration : 1,
                scale : 0,
                ease : "back-inOut",
                stagger :0.15,
                opacity : 0,
                delay : 0.5
          },"a").from ("#navCon .navHead" , {
                 x : "-200%",
                duration : 1,
                opacity : 0,
                ease : "power3.out",
                stagger : 0.15,
                delay : 0.3
          },"a")

          let hamTl = gsap.timeline({paused:true});
          
          
          hamTl.to("#center" , {
          opacity : 0,
          display : "none",
            // delay : 1
          },"a").to("#top" , {
             rotateZ : 225,
             translateY : 3,
           
             delay: 0.5
          },"a").to("#bottom" , {
             rotateZ : -225,
             translateY : -0,
            //  translateZ : -100,
             delay: 0.5
            

          },"a")

          // if(openNav){
          //   console.log("navPop");
            
          //   navTl.play();
          // }else{
          //   navTl.pause();
          // }

          // gsap.from("#navPop",{
              
          // })

          document.querySelector("#ham").addEventListener("click" , () =>{
            navOpen = !navOpen;
            if(navOpen){
                navTl.play();
                hamTl.play();
            }else{
                navTl.reverse();
                hamTl.reverse();

            }
          

            console.log("hellow");
            
          })

          document.querySelectorAll(".navHead").forEach((element,i)=>{
            element.addEventListener("mouseenter",()=>{
              gsap.to(innerBoxRef.current[i], { width: "100%", duration: 0.7, ease: "power3.out" });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(innerBoxRef.current[i], { width: 0, duration: 0.7, ease: "power3.in" });
      });

          })

        // innerBoxRef.current.parentElement.addEventListener("mouseenter", () => {
        //   gsap.to(innerBoxRef.current, {
        //     width: "100%",
        //     duration: 0.6,
        //     ease: "power2.out",
        //   });
        // });

        // innerBoxRef.current.parentElement.addEventListener("mouseleave", () => {
        //   gsap.to(innerBoxRef.current, {
        //     width: "0%",
        //     duration: 0.6,
        //     ease: "power2.out",
        //   });
        // });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    },
    { scope: [wrapperRef, craftRef, contactRef] }
  );

  const handleProjectConEnter = () => {
    context.cursor2ref.current.style.width = "120px";
    context.cursor2ref.current.style.height = "120px";
    context.cursor2ref.current.innerHTML = "Go Live";

    console.log(context);
  };
  const handleProjectConLeave = () => {
    context.cursor2ref.current.style.width = "25px";
    context.cursor2ref.current.style.height = "25px";
    context.cursor2ref.current.innerHTML = "";
  };

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
        <div key={`${char}-#${i}`} className="overflow-hidden">
          <span className="hover:scale-[1.1] text-[#515151]">{`${char} `}</span>
        </div>
      );
    }
  };

  return (
    // <></>
    <div className="">
      <div className="flex absolute top-[20%] md:top-[25%] lg:top-[35%] lg:scale-[1] md:scale-[0.9] scale-[0.7] -left-20 md:-left-17 lg:-left-15 z-50 rotate-z-90 text-xl font-['Mulish','Helvetica Neue',sans-serif]   gap-2 overflow-x-hidden bg-[#ff000037]    rounded-4xl pr-4 py-1  items-center  justify-center ">
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
              className=" lg:scale-[1] scale-[2] md:scale-[1.7]  z-[10] mask  w-[100%] h-screen absolute top-0 "
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
            <div className="flex textCon1  overflow-hidden text-[20vw] lg:text-[16vw] leading-[15rem] gap-1 items-center justify-center font-['stretch']">
              <span>S</span>
              <span>U</span>
              <span>R</span>
              <span>Y</span>
              <span>A</span>
            </div>
            <div className="flex overflow-hidden textCon2 text-[20vw] lg:text-[16vw] leading-[15rem]  gap-1  items-center justify-center font-['stretch']">
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
            className={`text absolute md:text-2xl lg:text-3xl  z-[4] left-[50%] whitespace-nowrap top-[50%] lg:top-[55%] transform -translate-x-1/2 translate-y-[50%]`}
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
        <div className="rounded-full svg  lg:scale-[1] scale-[0.7] absolute  -bottom-[8%] -right-[8%] lg:-bottom-[3%] lg:-right-[1.5%]">
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

        {/* Nav PopUp */}
        <div id="navPop" className={`w-[100%] navPop   backdrop-blur-md flex items-center justify-start h-[100vh] fixed left-0 top-0  z-[600] bg-[#ff000076]`}>
          <div id="links" className="w-[100px] md:scale-[1] scale-[0.7] absolute left-2 -top-4  md:top-0  active:scale-[0.8] transition-all">
                 <img className="w-full rounded-2xl inline-block" src={logo} alt="" />
               </div>
          {/* <MdClear onClick={() => 
           {console.log("clock")}
          } className="absolute p-2 top-30 font-bold text-black w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center right-10" /> */}
           <div id="links" className="flex  absolute right-10 top-[92%] md:top-5 items-center justify-center gap-3">
            <a

            className="w-[40px]"
              target="_blank"
              href="https://github.com/Surya-Annadurai-10/Surya-Annadurai-10"
            >
              <img className="w-[50px]  scale-[1.5] hover:scale-[2] transition-all md:scale-[1.8]" src={github} alt="" />
            </a>
            <a target="_blank" href="https://linkedin.com/in/surya-annadurai">
              <img className="w-[35px] hover:scale-[1.1]  md:scale-[1] scale-[0.8] mx-3" src={linkedin} alt="" />
            </a>
            <a href="" target="_blank">
              <img className="w-[37px] hover:scale-[1.1] md:scale-[1] scale-[0.8] transition-all" src={instagram} alt="" />
            </a>

            <a target="_blank" href="https://leetcode.com/u/Surya_Annadurai/">
              <img className="w-[45px] hover:scale-[1.1] transition-all" src={leetcode} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.geeksforgeeks.org/user/suryaannadu33zc/"
            >
              <img className="w-[52px] hover:scale-[1.1] md:scale-[1] scale-[0.8] transition-all" src={gfg} alt="" />
            </a>
          </div>
          <div id="navCon" className="md:ml-15 ml-5  navcon mt-3  md:mt-10 w-[100%] overflow-hidden">
            {
              navData.map((ele,index)=>{

                if(ele.name=="Resume"){
                     return <a key={`${ele.name}_${index}`}  href={resume} download={"Surya Annadurai.pdf"} className="relative">
              <div className="navHead relative w-[100%]  md:w-[75%] h-fit overflow-hidden">
                <div
                 ref={(el)=> innerBoxRef.current[index]=el}
                  className="w-[0%] h-[15%]  stripe -left-25 absolute top-1/2 z-100 -skew-x-70 bg-black"
                ></div>
                <h1 className="text-white z-[700]  font-[milker] transition-all duration-200 text-[13vw] ] md:text-[7vw]">
                {ele.name}
                </h1>
              </div>
            </a>
                }else{
                 return  <a key={`${ele.name}_${index}`} href={ele.link} className="relative">
              <div className="navHead relative  w-[100%] md:w-[75%] h-fit overflow-hidden">
                <div
                 ref={(el)=> innerBoxRef.current[index]=el}
                  className="w-[0%] h-[15%]  stripe -left-25 absolute top-1/2 z-100 -skew-x-70 bg-black"
                ></div>
                <h1 className="text-white z-[700]  font-[milker] transition-all duration-200 text-[13vw] md:text-[7vw]">
                {ele.name}
                </h1>
              </div>
            </a>
                }

                
              })
            }
           
            {/* <a href="#" className="relative">
              <div className="navHead relative  w-[100%] h-fit overflow-hidden">
                <div
                  ref={innerBoxRef}
                  className="w-[0%] h-[15%]  stripe -left-25 absolute top-1/2 z-100 -skew-x-45 bg-black"
                ></div>
                <h1 className="text-white z-[700]  font-[milker] transition-all duration-200 text-[7vw]">
                  Home
                </h1>
              </div>
            </a>
            <a href="#projectText">
              <div className="navHead relative  w-[100%] h-fit overflow-hidden">
                <div className="w-[0%] h-[15%]  stripe -left-25 absolute top-1/2 z-100 -skew-x-45 bg-black"></div>
                <h1 className="text-white z-[700]  font-[milker] transition-all duration-200 text-[7vw]">
                  Projects
                </h1>
              </div>
            </a>
            <a href="#">
              <div className="navHead relative  w-[100%] h-fit overflow-hidden">
                <div className="w-[0%] h-[15%]  stripe -left-25 absolute top-1/2 z-100 -skew-x-45 bg-black"></div>
                <h1 className="text-white z-[700]  font-[milker] transition-all duration-200 text-[7vw]">
                  Contact
                </h1>
              </div>
            </a>
            <a href="">
              <div className="navHead relative  w-[100%] h-fit overflow-hidden">
                <div className="w-[0%] h-[15%]  stripe -left-25 absolute top-1/2 z-100 -skew-x-45 bg-black"></div>
                <h1 className="text-white z-[700]  font-[milker] transition-all duration-200 text-[7vw]">
                  Resume
                </h1>
              </div>
            </a> */}
          </div>
        </div>
        <div id="ham" onClick={() => context.setOpenNav(!openNav)} className={`active:scale-[0.8] transition-all cursor-pointer z-[800]  fixed  right-5 md:scale-[1] scale-[0.7]  top-[3%] md:top-1/2 bg-red w-[50px] h-[50px] `}>
              
              <div id="top" className={`w-[50px] top  -skew-x-70 h-[4px] ${context.showWhiteLogo ? "bg-[#f1f1f1]" : "bg-black"}`}></div>
              <div  id="center" className={`w-[50px] center  h-[5px] my-2 ${context.showWhiteLogo ? "bg-[#f1f1f1]" : "bg-black"}`}></div>
              <div  id="bottom" className={`w-[50px] bottom -skew-x-70 h-[4px] ${context.showWhiteLogo ? "bg-[#f1f1f1]" : "bg-black"}`}></div>
        </div>
        <div>
          <div
            ref={page2Con}
            className="w-full h-[160vh] md:h-[125vh]  lg:h-[150vh]   overflow-x-hidden  "
          >
            <div className="backdrop-blur-md vanakkam">
              <h1 className="hellow ml-[3rem] mt-[5vh] flex items-center justify-start text-[16vh] lg:text-[19rem] font-['race'] whitespace-nowrap">
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
                // handleProjectConEnter
                context.setShowCursor(false);
              }}
              onMouseLeave={() => {
                // handleProjectConLeave
                context.setShowCursor2(false);
                context.setShowCursor(true);
              }}
              className="w-[100%] mt-[12rem] m-auto "
            >
              <h2 className="char p-[2rem] lg:p-[5rem] flex flex-wrap gap-2 text-2xl md:text-3xl lg:text-4xl font-['Mulish','Helvetica Neue',sans-serif]">
                {about.split(" ").map((char, i) => splitString(char, i))}
              </h2>
            </div>
          </div>
          <div
            ref={craftRef}
            onMouseEnter={() => {
              // context.setShowCursor2(false);
              context.setShowCursor(true);
              context.setEnteredProjects(false);
            }}
            className="w-full hidden md:block h-[195vh] relative"
          >
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
                <span className="child  text-[8rem] lg:text-[18rem] ">Crafting</span>
                <span className="child text-[8rem] lg:text-[18rem] ">the</span>
                <span className="child text-[8rem] lg:text-[18rem] ">web</span>
                <span className="child text-[8rem] lg:text-[18rem] ">with</span>
                <span className="child text-[8rem] lg:text-[18rem] ">these</span>
                <span className="child text-[8rem] lg:text-[18rem] ">Skills</span>
              </h1>
            </div>
          </div>

          <div
            ref={craftRef2}
            onMouseEnter={() => {
              // context.setShowCursor2(false);
              context.setShowCursor(true);
              context.setEnteredProjects(false);
            }}
            className="w-full block md:hidden h-[195vh] relative"
          >
            <div>
              <img
                className="absolute top-0 right-0 w-full h-full rotate-z-180 z-[0] shadow-[0px_0px_50px_50px_black]"
                src={bgred}
                alt=""
              />
              <div className="absolute top-0 right-0 w-full h-full  bg-linear-to-t from-black via-[#0000007a] z-[1] to-[#000000c8] to-95%"></div>
            </div>

            <div className="w-full  h-full flex">
              <h1 className=" z-[20] leading-[22rem] overflow-hidden absolute flex   gap-[10rem] ml-[1rem] md:ml-[4.3rem] craftingText2  font-['milker']">
                <span className="child text-[5rem] md:text-[8rem] lg:text-[18rem] ">Crafting</span>
                <span className="child text-[5rem] md:text-[8rem] lg:text-[18rem] ">the</span>
                <span className="child text-[5rem] md:text-[8rem] lg:text-[18rem] ">web</span>
                <span className="child text-[5rem] md:text-[8rem] lg:text-[18rem] ">with</span>
                <span className="child text-[5rem] md:text-[8rem] lg:text-[18rem] ">these</span>
                <span className="child text-[5rem] md:text-[8rem] lg:text-[18rem] ">Skills</span>
              </h1>
            </div>
          </div>

          {/* skills 1 ------------------- */}
          <div
            ref={skillsRef}
            className="w-full hidden lg:flex rounded-3xl overflow-hidden relative justify-center items-center  h-screen bg-[black]"
          >
            <h1
              id="skills"
              className="text-[15vw] font-bold tracking-tight skills "
            >
              SKILLS
            </h1>

            <div
              className="flex skillcardCon items-center  justify-start gap-[5rem]
              absolute  right-[0%] bottom-[0%]"
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
{/* skill 1 end------------------------- */}
          {/* skills2--------- */}

          <div
            ref={skillsRef2}
            className="w-full hidden md:flex lg:hidden rounded-3xl overflow-hidden relative justify-center items-center  h-screen bg-[black]"
          >
            <h1
              id="skills2"
              className="text-[15vw] font-bold tracking-tight skills2 "
            >
              SKILLS
            </h1>

            <div
              className="flex lg:hidden skillcardCon2 items-center  justify-start gap-[5rem]
              absolute  right-[0%] bottom-[0%]"
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
                    className="opacity-0 absolute scale-[0.7] lg:scale-[1] backdrop-blur-md  skillcard2  z-[5]  border border-[#5c5c5c] text-white  flex items-center justify-center flex-col gap-5 w-[30vw] h-[38vh] lg:w-[20vw] lg:h-[50vh] rounded "
                  >
                    <h1 className="font-['milker']  absolute left-0 -z-[10] bottom-[85%] num text-[8vw] lg:text-[5vw]">
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

{/* ---------------------skills2end------------------------------ */}

   {/* skills3--------- */}

          <div
            ref={skillsRef3}
            className="w-full flex md:hidden rounded-3xl overflow-hidden relative justify-center items-center  h-screen bg-[black]"
          >
            <h1
              id="skills3"
              className="md:text-[15vw] text-[18vw] font-bold tracking-tight skills3 "
            >
              SKILLS
            </h1>

            <div
              className="flex lg:hidden skillcardCon3 items-center  justify-start gap-[5rem]
              absolute  right-[0%] bottom-[0%]"
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
                    className="opacity-0 absolute scale-[0.6] lg:scale-[1] backdrop-blur-md  skillcard3  z-[5]  border border-[#5c5c5c] text-white  flex items-center justify-center flex-col gap-5 w-[50vw] h-[29vh] md:w-[30vw] md:h-[38vh] lg:w-[20vw] lg:h-[50vh] rounded "
                  >
                    <h1 className="font-['milker']  absolute left-0 -z-[10] bottom-[90%] num text-[10vw] md:text-[8vw] lg:text-[5vw]">
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

{/* ---------------------skills3end------------------------------ */}

          <div id="skillsCon" className="w-full h-[1vh] bg-black"></div>
          <div
            ref={projectRef}
            onMouseEnter={() => {
              // context.setShowCursor2(true);
              context.setShowCursor(false);
              context.setEnteredProjects(true);
              // handleProjectConLeave
            }}
            // onMouseLeave={() => {
            //   context.setShowCursor2(false);
            //   context.setShowCursor(true);
            //   context.setEnteredProjects(false);
            // }}
            className="bg-black hidden lg:block"
          >
            <div className="w-full hidden lg:grid place-items-center h-[91vh] text-center font-[700]">
              <h1
                id="projectsText"
                ref={projectTextRef}
                className="projectsText text-[15vw] uppercase "
              >
                Projects
              </h1>
            </div>
          </div>

{/* projectref2------------------ */}
          <div
            ref={projectRef2}
            onMouseEnter={() => {
              // context.setShowCursor2(true);
              context.setShowCursor(false);
              context.setEnteredProjects(true);
              // handleProjectConLeave
            }}
            // onMouseLeave={() => {
            //   context.setShowCursor2(false);
            //   context.setShowCursor(true);
            //   context.setEnteredProjects(false);
            // }}
            className="bg-black block md:hidden "
          >
            <div className="w-full grid md:hidden  place-items-center h-[91vh] text-center font-[700]">
              <h1
                id="projectsText2"
                ref={projectTextRef2}
                className="projectsText2 text-[#f1f1f1] text-[15vw] uppercase "
              >
                Projects
              </h1>
            </div>
          </div>

          {/* projectref3------------- */}
             <div
            ref={projectRef3}
            onMouseEnter={() => {
              // context.setShowCursor2(true);
              context.setShowCursor(false);
              context.setEnteredProjects(true);
              // handleProjectConLeave
            }}
            // onMouseLeave={() => {
            //   context.setShowCursor2(false);
            //   context.setShowCursor(true);
            //   context.setEnteredProjects(false);
            // }}
            className="bg-black  hidden md:block lg:hidden "
          >
            <div className="w-full hidden md:grid lg:hidden  place-items-center h-[91vh] text-center font-[700]">
              <h1
                id="projectsText3"
                ref={projectTextRef3}
                className="projectsText3 text-[#f1f1f1] text-[15vw] uppercase "
              >
                Projects
              </h1>
            </div>
          </div>



          <div
            ref={ProjectConRef}
            onMouseEnter={() => {
              // context.setShowCursor2(true);
              context.setShowCursor(false);
              context.setEnteredProjects(true);
            }}
            onMouseLeave={() => {
              // context.setShowCursor2(false);
              context.setShowCursor(true);
              context.setEnteredProjects(false);
            }}
            className="w-full text-black flex items-center justify-center border-none relative  h-screen bg-[#f1f1f1]"
          >
            {/* <div className="relative  flex items-center justify-center w-[10%] h-full">
              <h1 className={`text-[4rem] underline ${context.ShowWhiteLogo ? 'text-[#f1f1f1]' : 'text-black'} whitespace-nowrap mt-[5rem] -rotate-z-90  font-['race']`}>
                Recent Projects
              </h1>
            </div> */}

            <div
              ref={ProjectCardCon}
              className="w-full  relative pt-[10rem] lg:pt-[5rem]  projectCard flex items-center  justify-center h-screen "
            >
              <div className="  ">
                {projectsData.map((ele, i) => {
                  return (
                    <a
                      key={`${ele.name}_${i * 3}`}
                      href={ele.hostLink}
                      target="_blank"
                    >
                      <div
                        onMouseEnter={handleProjectConEnter}
                        onMouseLeave={handleProjectConLeave}
                        className="min-w-[95%] lg:min-w-[80%] left-2 projectCard absolute z-10 top-[100%] md:left-6 lg:left-[10%] rounded-2xl min-h-[40%] md:min-h-[65%] lg:min-h-[78%] "
                      >
                        <img
                          className="w-full h-full rounded-2xl absolute z-1 "
                          src={ele.img}
                          alt=""
                        />
                        <div className="absolute rounded-2xl w-full h-full left-0 top-0 right-0 bg-linear-to-t from-black via-30% to-transparent z-2"></div>
                        <div className="flex items-center md:flex-row flex-col justify-center gap-1 md:justify-between w-full h-[30%] px-10 absolute bottom-0 z-2">
                          <h1
                            className={
                              "text-white projectname font-bold font-['Mulish','Helvetica Neue',sans-serif] text-[2rem] md:text-[3rem] lg:text-[5rem]"
                            }
                          >
                            {ele.name}
                          </h1>
                          <div className="flex items-center  justify-center gap-4">
                            {ele.tech.map((ele, i) => {
                              return (
                                <img
                                  key={`${ele}_${i}`}
                                  className="w-[20px] md:w-[40px] lg:w-[50px]"
                                  src={ele}
                                  alt={`${i}`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ------contactref */}
          <div
            ref={contactRef}
            id="Contact_container"
            className="relative overflow-hidden container_connect"
          >
            <div
              id="top_heading"
              className="bg-[#F1F1F1]  overflow-hidden absolute top-0 w-full h-[50vh]"
            >
              <h1
                id="top_h1"
                className="text-[14vw] absolute left-[50%] lg:top-[96%] top-[98%] -translate-x-[50%] -translate-y-[50%]  font-[milker]  text-black"
              >
                DAZZLED?
              </h1>
            </div>
            <div className="w-full flex items-center flex-col justify-center text-white h-screen bg-black ">
              <div
                id="coffeeText"
                className="flex items-center flex-col gap-10 justify-center text-white"
              >
                <div className="text-[4vw] flex items-center justify-center gap-3 font-[milker]">
                  <h1 className="text-center">DROP A MAIL , LETS HAVE A COFFEE</h1>
                  <img className="lg:w-[100px] w-[60px]" src={coffee} alt="" />
                </div>

                <a href={`mailto:hellosuryaannadurai@gmail.com`}>
                  <button className="w-[250px] hover:shadow-2xl hover:scale-[1.1] transition-all overflow-hidden border border-white connectButton relative font-[milker] flex items-center justify-center gap-3 h-[70px] rounded-full  bg-white text-black">
                    <div className="w-[30px] transition-all duration-500 absolute left-[12%]  connect hover:w-[250px] hover:h-[70px]  bg-[#2aff04] h-[30px] rounded-full "></div>
                    <h1 className="text-3xl right-[15%] absolute z-5">
                      Connect
                    </h1>
                  </button>
                </a>
              </div>
            </div>
            <div
              id="bottom_heading"
              className="bg-[#F1F1F1] overflow-hidden absolute bottom-0 w-full h-[50vh]"
            >
              <h1
                id="bottom_h1"
                className="text-[14vw]  absolute left-[50%] lg:-top-[4%] -top-[2%]  -translate-x-[50%] -translate-y-[50%]  font-[milker]  text-black"
              >
                DAZZLED?
              </h1>
            </div>
          </div>

          <div className="w-full font-[milker] gap-3 h-[50vh] flex items-center justify-center flex-col  bg-[black]">
            <div className="flex thanks font-bold text-4xl items-center justify-center text-white gap-2 ">
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>

              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
            </div>
            <div className="flex thanks2 font-bold text-4xl items-center justify-center text-white gap-2 ">
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
              <h1 className="whitespace-nowrap">• Thanks for Visiting • 🙏 </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
