import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  let loaderConRef = useRef(null);
  const fontRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        let tl = gsap.timeline();
        

        tl.from(".box", {
          yPercent: -100,
          duration: 2.5,
          stagger: 0.35,
          ease: "power3.out",
        }).to(".box", {
          yPercent: -100,
          duration: 2.5,
          stagger: 0.3,
          opacity: 0,
          ease: "power3.out",
        });

        let wordArr = gsap.utils.toArray(".word");
       let wordTl = gsap.timeline();
       wordArr.forEach((ele,index) =>{
      //  console.log("ele" , ele);
       
        if(index != 2){
            wordTl.from(ele , {
                opacity : 0,
                duration : 1.5,
              
                ease: "power3.out"
            })
            
            wordTl.to(ele,{
             opacity  : 0,
                duration : 1.5,
              
                ease: "power3.out"
            },"-=0.5")
        }else{
            wordTl.from(ele , {
                opacity : 0,
                duration : 1.5,
                
                ease: "power3.out"
            })
            
            wordTl.to(ele,{
             opacity  : 0,
             duration : 1.5,
             delay : 1,
                ease: "power3.out"
            },"-=0.5")

       
        }
       
       })
       
       wordTl.to(".loader" ,{
       
           yPercent : -100,
           duration : 1,
    
           ease : "power3.out"
       },"-=1")
        
       wordTl.to(overlayRef.current , {
        yPercent : -100,
        duration : 1,
        delay : 0.4,
        ease :"power3.out"
      },"<")
     
      });

      return () => ctx.revert();
    },
    { scope: [loaderConRef, fontRef , overlayRef] }
  );

  return (
    <>
      <div className=" relative overflow-hidden">
      <div
        ref={loaderConRef}
        className="bg-black w-full loader relative overflow-hidden h-screen flex items-start justify-center"
      >
        <div className="box w-[20%] rounded-b-full h-[125%] bg-[rgb(255,0,0,0.95)]"></div>
        <div className="box w-[20%]  rounded-b-full  h-[125%] bg-[rgba(255,0,0,0.75)]"></div>
        <div className="box w-[20%]  rounded-b-full h-[125%] bg-[rgba(255,0,0,0.5)]"></div>
        <div className="box w-[20%]  rounded-b-full h-[125%] bg-[rgb(255,0,0,0.75)]"></div>
        <div className="box w-[20%]  rounded-b-full h-[125%] bg-[rgb(255,0,0,0.95)]"></div>
        <div className="w-full h-screen bg-[#ffffff00] absolute  grid place-items-center ">
          <div ref={fontRef} className="text-white  relative text-center bg-red-600 w-[250px]">
            <h1 className="font-['Lokicola'] tracking-wider left-[50%] top-[50%] translate-[-50%]  word absolute drop-shadow-2xl  text-6xl">Persistence<sup>!</sup></h1>
            <h1 className="font-['Lokicola'] tracking-wider left-[50%] top-[50%] translate-[-50%] word  whitespace-nowrap  drop-shadow-2xl  absolute text-6xl">Hardwork<sup>!</sup></h1>
            <h1 className="font-['Lokicola'] tracking-wider left-[50%] top-[50%] translate-[-50%] text-[#ff0000c0] drop-shadow-2xl  word absolute text-6xl">Consistency<sup>!</sup></h1>
          </div>

        </div>
      </div>
          <div ref={overlayRef} className="w-full absolute overlay top-[100%] h-screen bg-[#000000] absolute"> </div>
      </div>
    </>
  );
};

export default Loader;
