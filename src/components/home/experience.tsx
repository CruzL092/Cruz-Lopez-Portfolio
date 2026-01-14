"use client";

import Image from "next/image";
import ACMLogo from "../../../public/images/acm_logo.webp";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 1.0,
      }}
    >
      <div className="flex flex-col mt-4 mb-4 text-black">
        <div className="flex flex-row">
          <Image src={ACMLogo} alt="ACM Logo" width={100} height={100} />
          <div className="font-bold text-2xl text-[#635656] mt-6 ml-2 lg:mt-8">
            Front-End Web Developer
          </div>
        </div>
        <div className="font-extrabold text-xl text-[#635656] mt-2 mb-4">
          June 2024 - December 2025
        </div>
        <ul className="list-disc list-inside text-xl text-[#635656]">
          <li>
            Developed and deployed 4+ responsive websites for UCR clubs and a
            company using React, TailwindCSS, and Node.js
          </li>
          <li>
            Collaborated with student teams and club leaders to ensure design
            alignment and meet client needs
          </li>
          <li>
            Implemented UI components for the websites (navigation bars,
            calendars, buttons), improving development efficiency by 15%
          </li>
        </ul>
        <hr className="border-gray-400 border-t-2 my-4 w-full opacity-50" />
      </div>
    </motion.div>
  );
};

export default Experience;
