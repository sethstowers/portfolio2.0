import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dadd3485-64ba-4a0e-b174-f692c85db1c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
      // bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'm eager to connect with you! Share your questions, comments, or
        feedback through the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-2 gap-6 mt-10 mb-6">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="p-3 outline-none border-[0.5px] border-gray-400 
            rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 text-[14px] md:text-[16px]"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="p-3 outline-none border-[0.5px] border-gray-400 
             rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 text-[14px] md:text-[16px]"
          />
        </div>
        <div className="mb-6">
          {" "}
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            rows="6"
            placeholder="Enter your message"
            name="message"
            required
            className="
            w-full p-4 outline-none border-[0.5px] border-gray-400 
            rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90 text-[14px] md:text-[16px]"
          ></motion.textarea>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between
         gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 
         dark:bg-transparent dark:border-[1px] dark:hover:bg-darkHover/30 cursor-pointer"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
