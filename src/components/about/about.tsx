"use client";

import Cruz from "../../../public/images/cruz.webp";
import Image from "next/image";
import { motion } from "motion/react";

const profileAnimation = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      duration: 1.2,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="flex flex-col justify-center items-center w-full mb-12 bg-linear-to-b lg:bg-linear-to-r from-[#4DB1B1] via-[#90dfdf] to-[#90dfdf] lg:to-white h-140 border-b">
        <div className=" text-5xl md:text-6xl lg:text-7xl mb-8 font-bold text-white">
          About Me
        </div>
        <motion.div
          variants={profileAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center">
            <Image
              src={Cruz}
              alt="Cruz Pic"
              width={250}
              height={250}
              className="mt-6 mb-6 lg:m-6 rounded-full aspect-square object-cover"
            />
            <div className="text-4xl md:text-5xl lg:text-6xl mb-2 font-bold text-white">
              Cruz Lopez
            </div>
            <div className="text-1xl md:text-2xl lg:text-3xl mb-8 font-bold text-white">
              UCR Graduate, Software Engineer
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={profileAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center text-center w-4/5 lg:w-5/6 text-xl md:text-2xl lg:text-3xl text-[#635656] font-bold mt-10 mb-10">
            <p className="mb-10 lg:mb-15 text-center">
              Growing up my curiosity was always fueled by technology. As I
              explored explored my passions as I grew, I always felt that I
              would be doing something with it.{" "}
            </p>
            <p className="mb-10 lg:mb-15 text-center">
              It wasn’t until I went to the Univeristy of California, Riverside
              and joined the ACM (Association of Computing Machinery) Club where
              I truly found an interest that I can confidently be passionate
              about. Thanks to ACM I became very interested in Web Development
              thanks to the projects it let me be involved in.{" "}
            </p>
            <p className="mb-10 lg:mb-15 text-center">
              As I pursue my own projects, I hope to continue to grow my skills
              and further my experience to help others build seamless and nicely
              built websites that fufills their visions.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="text-4xl md:text-5xl lg:text-6xl mb-16 p-2 font-bold bg-linear-to-r from-[#635656] via-[#8f8e8e] to-[#8E8E8E] text-transparent bg-clip-text">
        My Core Values:
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col lg:flex-row w-4/5 lg:w-5/6 text-3xl md:text-4xl mb-6"
      >
        {["Communication", "Adaptability", "Willingness to Learn"].map(
          (value) => (
            <motion.div
              key={value}
              variants={profileAnimation}
              className="flex justify-center items-center bg-[#f5f5f5] w-full lg:w-1/3 h-40 md:h-50 border-2 font-bold text-[#635656] text-center rounded-md mb-10 lg:mr-10"
            >
              {value}
            </motion.div>
          ),
        )}
      </motion.div>
    </div>
  );
};

export default about;
