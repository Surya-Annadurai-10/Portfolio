import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ContactSection = () => {
const contactRef = useRef(null);

  useGSAP(() =>{
   let ctx = gsap.context(() =>{
    let contactTl = gsap.timeline({
      scrollTrigger : {
        trigger : "#Contact_container",
        scroller : "body",
        start : "50% 50%",
        end : "100% 50%",
        scrub : 2,
        pin : true
      }
    })

    contactTl.to("#top_heading" , {
      top : "-50%"
    })
   })

    return () => ctx.revert();
  },{scope : [contactRef]})

  return <>
  
  
   <div ref={contactRef} id="Contact_container" className="relative overflow-hidden container_connect">
     <div id="top_heading" className="bg-[#F1F1F1]  overflow-hidden absolute top-0 w-full h-[50vh]">
      <h1 className="text-[8vw] absolute left-[50%] top-[97%]  -translate-x-[50%] -translate-y-[50%]  font-[milker]  text-black">DAZZLED ?</h1>
    </div>
    <div className="w-full h-screen bg-black "></div>
    <div id="bottom_heading" className="bg-[#F1F1F1] overflow-hidden absolute bottom-0 w-full h-[50vh]">
      <h1 className="text-[8vw]  absolute left-[50%] top-[50%] -bottom-[106.5%] -translate-x-[50%] -translate-y-[50%]  font-[milker]  text-black">DAZZLED ?</h1>


    </div>
   </div>

   <div className="w-full h-screen bg-[red]">
    
   </div>


  
  </>;
};

export default ContactSection;
