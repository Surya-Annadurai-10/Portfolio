import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";
// import Hero from "./Components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Projects from "./Containers/Projects";
import Home from "./Containers/Home";
import Layout from "./Containers/Layout";
// import Contact from "./Containers/Contact";
import LocomotiveScroll from 'locomotive-scroll';
import { AnimatePresence } from "motion/react";

const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container"),
  smooth : true,
  lerp : 0.001
});


export const DataContext = createContext();
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // {
      //   path: "/projects",
      //   element: <Projects />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    ],
  },
]);

function App() {
  const [showCursor, setShowCursor] = useState(false);
  const [showCursor2, setShowCursor2] = useState(false);
  const [enteredProjects , setEnteredProjects] = useState(false);
  const [showWhiteLogo , setShowWhiteLogo] = useState(true);
  const [showHero, setShowHero] = useState(false);
  // const [blackCursor, setBlackCursor] = useState(true);
  const [openNav ,setOpenNav] = useState(false);

  const cursorRef = useRef(null);
  const [coords, setCoords] = useState({ x: 100, y: 50 });
  const [blur , setBlur] = useState(false)
  const cursor2ref = useRef(null);

  // console.log(coordinates);

  const cursorCon = useRef(null);

  const colors = [
    "#ffb56b",
    "#ffb56b",
    "#fdaf69",
    "#fdaf69",

    "#f89d63",
    "#f89d63",

    "#f59761",
    "#f59761",
    "#ef865e",
    "#ef865e",

    "#ec805d",
    "#ec805d",

    "#e36e5c",
    "#e36e5c",

    "#df685c",
    "#df685c",

    "#d5585c",
    "#d5585c",

    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#60005f",
    "#48005f",
    "#3d005e",
    "#48005f",
    "#3d005e",
    "#48005f",
    "#3d005e",
   
  
  ];

  // const colors =[
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // "#fff",
  // ]

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setShowHero(true);
      setShowCursor(true);
    
    }, 8200);

    const updateCoords = (e) => {

      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
      // console.log(coords.current.x , coords.current.y);
    };

    window.addEventListener("mousemove", updateCoords);

    return () => {
      clearTimeout(timeOut);
      window.removeEventListener("mousemove", updateCoords);
    };
  }, []);

  useGSAP(
    () => {
      if (showCursor) {
        let ctx = gsap.context(() => {
          let cursorArr = gsap.utils.toArray(".circle")
          let tl = gsap.timeline();
        cursorArr.forEach((ele , i) =>{
          
          tl.to(ele, {
            left: coords.x +1 ,
            top: coords.y +3,
            scale : () => (cursorArr.length - i) / (cursorArr.length + (cursorArr.length) / 8) ,
             backgroundColor : colors[i] ,
            duration: 0.006,
            // duration : 0.008,
            ease : "power3.out"
          });
        })
        });

        return () => ctx.revert();
      }

      if (showCursor2 || enteredProjects) {
        let ctx2 = gsap.context(() => {
          // let cursorArr = gsap.utils.toArray(".cursor2")
          let tl = gsap.timeline();
        // cursorArr.forEach((ele , i) =>{
          
        //   tl.to(ele, {
        //     left: coords.x +1 ,
        //     top: coords.y +3,
        //     scale : () => (cursorArr.length - i) / (cursorArr.length + (cursorArr.length) / 8) ,
        //      backgroundColor : colors[i] ,
        //     duration: 0.008,
        //     // duration : 0.008,
        //     ease : "power3.out"
        //   });
        // })

        gsap.to(".cursor2" , {
          left: coords.x +1 ,
          top: coords.y +3,
          duration: 0.001,
          scale: 1,
          ease : "power3.out"
        })
        });

        return () => ctx2.revert();
      }
    },
    { scope: null, dependencies: [showCursor, enteredProjects, showCursor2, coords] }
  );

  return (
    <> 
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px] -z-[100]  bg-black"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>
          <div className={` ${showCursor ? "circle opacity-100 " : " opacity-0 w-[0px]  bg-black -z-[100]"  }`}></div>

      <div ref={cursor2ref} className={`cursor2 z-[100]  ${showCursor2 ? "opacity-100 w-[130px] h-[130px] scale-[1] bg-[#f1f1f1f1] " : "opacity-0 duration-200 scale-0 w-[0px] h-[0px]"}  ${enteredProjects ? 'opacity-100  w-[25px] h-[25px] bg-[black]' : ' bg-[#f1f1f1f1]'}`}></div>
        

   
      {showHero ? (
        <>
        <DataContext.Provider value={{coords,setOpenNav,openNav,cursor2ref,setShowWhiteLogo,showWhiteLogo,setEnteredProjects,enteredProjects,setShowCursor2,showCursor2,setBlur,blur , setCoords ,showCursor , setShowCursor}} >
          
        
          
          <RouterProvider router={router} />
        </DataContext.Provider>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
