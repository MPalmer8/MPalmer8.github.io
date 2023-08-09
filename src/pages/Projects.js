import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";
import "../styles/Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return <div className="projects">
    <h1>My Projects</h1>
    <p><i><b>Click on each card for more information</b></i></p>
    <div className="projectList">
      {projectList.map((project, index) => {
        return (
          <motion.div
            transition={{delay: 0.125 * index + 0.1, duration: 0.5}}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            key={index}
          >
            <ProjectItem id={index} name={project.name} image={project.image} logos={project.logos} />
          </motion.div>
        );
      })}
      
    </div>
  </div>;
  
}

export default Projects