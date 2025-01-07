import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Skills = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-[10%] scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(
          ({ icon, dark_icon, title, description, link }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12
            hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
            duration-500 dark:border-white dark:hover:bg-transparent dark:hover:shadow-white"
            >
              <Image
                src={isDarkMode ? dark_icon : icon}
                alt=""
                className="w-10"
              />
              <h3 className="text-md my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
