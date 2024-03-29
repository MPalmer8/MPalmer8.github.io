import React from 'react';
import { useNavigate } from "react-router-dom";

function EducationItem({image, name, time, course, grade, id}) {
  const navigate = useNavigate()
  return (
    <div 
      className="educationItem" 
      onClick={() => {
        navigate("/education/" + id)
      }}
    >
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 class="EducationMain"><b>{name} </b></h1>
      <p><b><i>{time}</i></b></p>
      <p><b>{course}</b></p>
      <p><b>{grade}</b></p>
    </div>
  );
  
}

export default EducationItem