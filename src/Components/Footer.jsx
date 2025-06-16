import React from "react";
import foot from "../assets/foot.jpg";
import instagram from "../assets/instagram.jpg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/Github.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";

import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";



const Footer = () => {
  return (
    <div className="w-full flex items-center text-black flex-col justify-between md:justify-evenly  h-[60vh] md:h-[50vh] bg-[#FFFFFF]">
      <div className="w-full flex items-center text-black md:flex-row flex-col justify-evenly h-[50vh] bg-[##FFFFFF]">
        <div className="flex items-center justify-center flex-col ">
          <h2 className="font-semibold">No © copyright issues.</h2>
          <p className="text-center">Feel free to copy. If you need any help, ping me!</p>
        </div>
        <div className="flex items-center justify-center gap-2 flex-col ">
          <h2 className="sacro text-5xl text-center lg:text-6xl text-black">Surya Annadurai</h2>
          <p>
            Made with<span className="text-2xl"> ♥️ </span>in India
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center flex-col ">
          <h2>You can find me Everywhere!</h2>
          <div className="flex items-center justify-center gap-2">
               <a
          
                      className="w-[40px]"
                        target="_blank"
                        href="https://github.com/Surya-Annadurai-10/Surya-Annadurai-10"
                      >
                        <img className="w-[50px]  scale-[1.2] hover:scale-[2] transition-all md:scale-[1.8]" src={github} alt="" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/in/surya-annadurai">
                        <img className="w-[35px] hover:scale-[1.1]  md:scale-[1] scale-[0.6] mx-3" src={linkedin} alt="" />
                      </a>
                      <a href="" target="_blank">
                        <img className="w-[37px] hover:scale-[1.1] md:scale-[1] scale-[0.6] transition-all" src={instagram} alt="" />
                      </a>
          
                      <a target="_blank" href="https://leetcode.com/u/Surya_Annadurai/">
                        <img className="w-[45px] hover:scale-[1.1]  md:scale-[1] scale-[0.6] transition-all" src={leetcode} alt="" />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.geeksforgeeks.org/user/suryaannadu33zc/"
                      >
                        <img className="w-[52px] hover:scale-[1.1] md:scale-[1] scale-[0.6] transition-all" src={gfg} alt="" />
                      </a>
           
           
            {/* <a

            className=""
              target="_blank"
              href="https://github.com/Surya-Annadurai-10/Surya-Annadurai-10"
            >
              <FaGithub className="text-3xl"/>
            </a>
            <a target="_blank" href="https://linkedin.com/in/surya-annadurai">
              <ImLinkedin  className="text-3xl"/>
            </a>
            <a href="" target="_blank">
              <GrInstagram  className="text-3xl"/>
            </a>

            <a target="_blank" href="https://leetcode.com/u/Surya_Annadurai/">
              <SiLeetcode className="text-3xl"/>
            </a>
            <a
              target="_blank"
              href="https://www.geeksforgeeks.org/user/suryaannadu33zc/"
            >
              
              <SiGeeksforgeeks className="text-3xl"/>
            </a> */}
          </div>
           {/* <div id="links" className="flex  absolute right-10 top-[92%] md:top-5 items-center justify-center gap-3">
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
                    </div> */}
        </div>
      </div>
      <div >
        <img className="h-[10vh] w-[100%] lg:h-[22vh] md:h-[18vh]" src={foot} alt="" />
      </div>
    </div>
  );
};

export default Footer;
