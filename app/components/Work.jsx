import { assets, workData } from "@/assets/assets";
import { IoLink, IoLogoGithub } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-[10%] scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Latest projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Discover a variety of projects
        demonstrating my front-end development expertise.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="w-full rounded-xl overflow-hidden border-[0.5px] border-gray-400 hover:-translate-y-1 
                duration-500 hover:shadow-black hover:border-black relative group dark:border-none dark:hover:shadow-white"
          >
            <img src={project.bgImage} alt="" className="" />
            <div
              className="bg-white w-3/4 md:1/2 rounded-tr-md  absolute bottom-0 
            left-0 py-2 px-5 flex items-center justify-between 
            duration-500 group-hover:bg-blue-50 dark:bg-darkTheme dark:group-hover:bg-darkTheme 
            "
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-white/80">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap items-center">
                <a href={project.link} target="_blank">
                  <IoLink className="text-[20px] md:text-[24px] cursor-pointer" />
                </a>
                <a href={project.git} target="_blank">
                  <IoLogoGithub className="text-[20px] md:text-[24px] cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ----Square version of projects---- */}
      {/* <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative 
            cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 
            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
            duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 
              aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-100 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </motion.div>
  );
};

export default Work;
