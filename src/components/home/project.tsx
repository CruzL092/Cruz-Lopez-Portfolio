"use client";

import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";
//const MotionImage = motion(Image);

interface HeaderProps {
  img1: string | StaticImageData;
  altText1: string;
  project: string;
  date: string;
  description: string;
  img2?: string | StaticImageData;
  altText2?: string;
  img3?: string | StaticImageData;
  altText3?: string;
  weblink?: string;
  gitlink?: string;
}

const Project = ({
  img1,
  altText1,
  project,
  date,
  description,
  img2,
  altText2,
  img3,
  altText3,
  weblink,
  gitlink,
}: HeaderProps) => {
  return (
    <div className="flex flex-col mt-4 mb-4 text-black">
      <div className="flex flex-col">
        <div className="lg:flex">
          {weblink ? (
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="shrink-0 block"
            >
              <Link href={weblink} target="_blank" rel="noopener noreferrer">
                <Image
                  src={img1}
                  alt={altText1}
                  width={360}
                  className="w-full h-full block"
                />
              </Link>
            </motion.div>
          ) : (
            <Image src={img1} alt={altText1} width={360} />
          )}
          <div className="flex flex-col">
            <div className="lg:flex">
              <div className="lg:w-full font-bold text-3xl lg:text-3xl text-[#635656] mt-6 lg:mt-2 lg:ml-4">
                {project}
              </div>
              <div className="font-extrabold text-xl lg:w-full lg:text-right text-[#635656] mt-2 lg:mt-3 lg:ml-4">
                {date}
              </div>
            </div>
            <div className="text-xl lg:text-2xl text-[#635656] lg:ml-4">
              {description}
            </div>
            <div className="flex mt-2">
              {img2 && altText2 && (
                <Image
                  src={img2}
                  alt={altText2}
                  width={50}
                  className="mr-2 lg:ml-4"
                />
              )}
              {img3 &&
                altText3 &&
                (gitlink ? (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                    className="shrink-0 block"
                  >
                    <Link
                      href={gitlink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={img3} alt={altText3} width={50} />
                    </Link>
                  </motion.div>
                ) : (
                  <Image src={img3} alt={altText3} width={50} />
                ))}
            </div>
          </div>
        </div>
        <hr className="border-gray-400 border-t-2 my-4 w-full opacity-50 mt-12" />
      </div>
    </div>
  );
};

export default Project;
