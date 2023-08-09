import React from 'react';
import { useParams } from "react-router-dom";
import { experienceList } from "../helpers/ExperienceList";
import "../styles/ExperienceDisplay.css"

function ExperienceDisplay() {
    const { id } = useParams();
    const experience = experienceList[id];
  return (
    <div className="experience">
        <h1> {experience.name} </h1>
        <img src={experience.image} alt=""/>
        <div className="time">
            <p>{experience.time}</p>
        </div>
        <p><b>Role:</b><br></br>{experience.role}</p>
        <div className="responsibilities">
            <p><b>Description:</b>{responsibilitiesSection(experience.responsibilities)}</p>
        </div>
    </div>
  );
}

function responsibilitiesSection(elements) {
    return(
        <ul>
            {elements.map(item => {
            return <li>{item}</li>;
            })}
        </ul>
    )
}

export default ExperienceDisplay