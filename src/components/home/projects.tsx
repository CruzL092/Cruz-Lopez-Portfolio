"use client";

import Project from "./project";
import { projects } from "../../data/projects";
import { motion } from "motion/react";

const projectAnimations = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      duration: 1.0,
    },
  },
};

const Projects = () => {
  return (
    <div className="flex flex-col">
      {projects.map(
        (
          {
            img1,
            altText1,
            project,
            date,
            description,
            img2,
            altText2,
            img3,
            altText3,
          },
          index,
        ) => (
          <motion.div
            key={index}
            variants={projectAnimations}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Project
              key={index}
              img1={img1}
              altText1={altText1}
              project={project}
              date={date}
              description={description}
              img2={img2}
              altText2={altText2}
              img3={img3}
              altText3={altText3}
            />
          </motion.div>
        ),
      )}
    </div>
  );
};

export default Projects;
