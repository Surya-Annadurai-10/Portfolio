import React from "react";
import foot from "../assets/foot.jpg";
import instagram from "../assets/instagram.jpg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/Github.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";

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
              <img className="w-[50px]" src={github} alt="" />
            </a>
            <a target="_blank" href="www.linkedin.com/in/surya-annadurai">
              <img className="w-[30px]" src={linkedin} alt="" />
            </a>
            <a href="" target="_blank">
              <img className="w-[30px]" src={instagram} alt="" />
            </a>

            <a target="_blank" href="https://leetcode.com/u/Surya_Annadurai/">
              <img className="w-[40px]" src={leetcode} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.geeksforgeeks.org/user/suryaannadu33zc/"
            >
              <img className="w-[50px]" src={gfg} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div >
        <img className="h-[10vh] md:h-[18vh]" src={foot} alt="" />
      </div>
    </div>
  );
};

export default Footer;
