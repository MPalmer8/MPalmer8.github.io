import React from 'react';
import { useParams } from "react-router-dom";
import { educationList } from "../helpers/EducationList";
import "../styles/EducationDisplay.css"

function EducationDisplay() {
    const { id } = useParams();
    const education = educationList[id];
  return (
    <div className="education">
        <h1> {education.name} </h1>
        <img src={education.image} alt=""/>
        <div className="time">
            <p>{education.time}</p>
        </div>
        <p><b>Course:</b><br></br>{education.course}</p>
        <div className="grades">
            {education.grade
            ? <p><b>Grades:</b>{gradesSection(education.gradeList)}</p>
            : <></>
            }
        </div>
    </div>
  );
}

function gradesSection(elements) {
    return(
        <ul>
            {elements.map(item => {
            return <li>{item}</li>;
            })}
        </ul>
    )
}

export default EducationDisplay