"use client";

import Image from "next/image";
import { icons } from "../data/footer";
import { motion } from "motion/react";

const MotionImage = motion(Image);

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-linear-to-b lg:bg-linear-to-r from-[#4DB1B1] via-[#90dfdf] to-[#90dfdf] lg:to-white h-full lg:h-40 w-full text-white border-t border-black mt-10">
      <div className="flex w-full items-center mt-8 lg:mt-0">
        {icons.map((icon, index) => (
          <MotionImage
            key={index}
            src={icon.name}
            alt={icon.alt}
            width={icon.width}
            className={icon.className}
            whileHover={{
              scale: 1.15,
              y: -6,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          />
        ))}
      </div>
      <div className="flex w-full flex-col  justify-center items-center mt-6 md:mt-10 lg:justify-end lg:items-end lg:mr-1 mb-1 text-[#635656]">
        <p className="flex lg:w-2/6 items-start mb-1">
          &#169; 2026 Cruz Lopez{" "}
        </p>
        <p className="flex lg:w-2/6 items-start">Last Updated: January 2026</p>
      </div>
    </div>
  );
};

export default Footer;
