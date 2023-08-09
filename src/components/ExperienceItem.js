import React from 'react';
import { useNavigate } from "react-router-dom";

function ExperienceItem({image, name, time, role, id}) {
  const navigate = useNavigate()
  return (
    <div 
      className="experienceItem" 
      onClick={() => {
        navigate("/experience/" + id)
      }}
    >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> <b>{name}</b> </h1>
        <p> <b><i>{time}</i></b> </p>
        <p> <b>{role}</b> </p>
    </div>
  );
  
}

export default ExperienceItem