"use client";

import Image from "next/image";
import Link from "next/link";
import { icons } from "../data/footer";
import { motion } from "motion/react";

const MotionImage = motion(Image);

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-linear-to-b lg:bg-linear-to-r from-[#4DB1B1] via-[#90dfdf] to-[#90dfdf] lg:to-white h-full lg:h-40 w-full text-white border-t border-black mt-10">
      <div className="flex w-full items-center mt-8 lg:mt-0">
        <div className="flex w-full justify-center lg:justify-start lg:ml-[15%]">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex ml-[15%] mr-[15%] justify-center lg:justify-start mb-8 lg:mb-0 "
            >
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
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:justify-start items-center text-white text-xl md:text-2xl font-sans font-bold pr-[0%] drop-shadow-sm drop-shadow-black">
        cruzbusiness760@gmail.com
      </div>
      <div className="flex w-full flex-col  justify-center items-center mt-6 md:mt-10 lg:justify-end lg:items-end lg:mr-1 mb-1 text-[#635656]">
        <p className="flex lg:w-[35%] items-start mb-1">
          &#169; 2026 Cruz Lopez{" "}
        </p>
        <p className="flex lg:w-[35%] items-start">
          Last Updated: January 2026
        </p>
      </div>
    </div>
  );
};

export default Footer;
