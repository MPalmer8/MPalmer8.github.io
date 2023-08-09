import React from 'react';
import EducationItem from "../components/EducationItem";
import { educationList } from "../helpers/EducationList";
import "../styles/Education.css";
import { motion } from "framer-motion";

function Education() {
  return <div className="educations">
    <h1 class="educationMain">My Education</h1>
    <div className="educationList">
      {educationList.map((education, index) => {
        return (
          <motion.div
            transition={{delay: 0.125 * index + 0.1, duration: 0.5}}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            key={index}
          >
            <EducationItem id={index} name={education.name} image={education.image} time={education.time} course={education.course} grade={education.grade} />
          </motion.div>
        );
      })}
      
    </div>
  </div>;
  
}

export default Education