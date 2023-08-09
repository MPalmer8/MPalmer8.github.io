import React from 'react';
import ExperienceItem from "../components/ExperienceItem";
import { experienceList } from "../helpers/ExperienceList";
import "../styles/Experience.css";
import { motion } from "framer-motion";

function Experience() {
  return <div className="experiences">
    <h1>My Experience</h1>
    <p><i><b>Click on each card for more information</b></i></p>
    <div className="experienceList">
      {experienceList.map((experience, index) => {
        return (
          <motion.div
            transition={{delay: 0.125 * index + 0.1, duration: 0.5}}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            key={index}
          >
            <ExperienceItem id={index} name={experience.name} image={experience.image} time={experience.time} role={experience.role} />
          </motion.div>
        );
      })}
      
    </div>
  </div>;
  
}

export default Experience