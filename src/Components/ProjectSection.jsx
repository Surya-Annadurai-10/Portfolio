import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ProjectSection = () => {
 

  useGSAP(() =>{
    let ctx = gsap.context(() =>{
      
    })

    return ctx.revert();
  },{scope:projectRef} )

  return (
    <div ref={projectRef} className="">
      <div className="w-full grid place-items-center h-[90vh] text-center font-[700]">
        <h1 className="projects text-[15vw] uppercase ">Projects</h1>
      </div>
    </div>
  );
};

export default ProjectSection;
