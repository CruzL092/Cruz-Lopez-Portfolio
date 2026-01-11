import Project from "./project";
import { projects } from "../../data/projects";

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
        ),
      )}
    </div>
  );
};

export default Projects;
