import { useEffect, useRef, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./Containers/Projects";
import Home from "./Containers/Home";
import Layout from "./Containers/Layout";
import Contact from "./Containers/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  const [showCursor, setShowCursor] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const cursorRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // console.log(coordinates);

  const cursorCon = useRef(null);

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
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

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setShowHero(true);
      setShowCursor(true);
    }, 8600);

    const updateCoords = (e) => {
      // let rect = cursorRef.current.getBoundingClientRect();
      // console.log(rect);
      // let offSetX = rect.width / 2;
      // let offSetY = rect.height / 2;

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
            scale : () => (cursorArr.length - i) / (cursorArr.length + (cursorArr.length) / 2) ,
             backgroundColor : colors[i] ,
            duration: 0.008,
            ease : "power3.out"
          });
        })
        });

        return () => ctx.revert();
      }
    },
    { scope: null, dependencies: [showCursor, coords] }
  );

  // useEffect(() => {

  // gsap.to( cursorRef.current , {
  //   left : coords.x - 12,
  //   top : coords.y - 12
  // })

  //   return () => {
  //     window.removeEventListener("mousemove", updateCoords);
  //   };
  // }, [showCursor]);

  // useEffect(() =>{
  //   let cursorArr = document.querySelectorAll(".cursor")

  //   cursorArr.forEach((ele , i) =>{
  //     ele.x = 0,
  //     ele.y = 0,
  //     ele.style.backgroundColor = colors[i % colors.length]
  //   })

  //   function animateCircles() {

  //     let x = coordinates.x;
  //     let y = coordinates.y;

  //     cursorArr.forEach(function (circle, index) {
  //       circle.style.left = x - 12 + "px";
  //       circle.style.top = y - 12 + "px";

  //       circle.style.scale = (cursorArr.length - index) / cursorArr.length;

  //       circle.x = x;
  //       circle.y = y;

  //       const nextCircle = cursorArr[index + 1] || cursorArr[0];
  //       x += (nextCircle.x - x) * 0.3;
  //       y += (nextCircle.y - y) * 0.3;
  //     });

  //     requestAnimationFrame(animateCircles);
  //   }

  //   animateCircles();
  // },[coordinates])

  // useEffect(() =>{
  //   const mouseMove = (dets) => {
  //     setCoordinates({
  //       x : dets.clientX,
  //       y : dets.clientY
  //     })
  //     // let ctx = gsap.context(() => {
  //     //   let cursorArr = gsap.utils.toArray(".cursor");
  //     //   cursorArr.forEach((ele , i) =>{
  //     //     const nextCircle = cursorArr[i + 1] || cursorArr[0]
  //     //     // console.log(ele)
  //     //     gsap.to(ele , {
  //     //      left :coordinates.x -12,
  //     //       top :coordinates.y -12,
  //     //       backgroundColor : colors[i % colors.length],
  //     //       scale : () => (cursorArr.length - i) / cursorArr.length,
  //     //       x :coordinates.x ,
  //     //       y :coordinates.y

  //     //     })

  //     //     gsap.to(nextCircle , () =>{
  //     //       setCoordinates({
  //     //         x : () => {
  //     //            return coordinates.x += (nextCircle.x - coordinates.x) * 0.3

  //     //         },
  //     //         y : () => {
  //     //           return coordinates.y += (nextCircle.y - coordinates.y) * 0.3

  //     //        },

  //     //       })
  //     //     })
  //     //   })

  //     // });
  //     // return () => ctx.revert();
  //   }

  //    if(showCursor){
  //     window.addEventListener("mousemove",mouseMove );
  //    }

  //    return () => window.removeEventListener("mousemove" , mouseMove)
  // },[showCursor])

  return (
    <>
      {showCursor ? (
        <>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
         
        </>
      ) : null}
      {showHero ? (
        <>
          <RouterProvider router={router} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
