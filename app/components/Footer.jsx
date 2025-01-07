import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-[40px]">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-[200px] mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          stowers3099@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© Seth Stowers. Created in NextJs.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a href="https://github.com/sethstowers" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/seth-stowers-85587b318/" target="_blank">LinkedIn</a></li>
            <li><a href="" target="_blank">Resume</a></li>
       </ul>
      </div>
    </div>
  );
};

export default Footer;
