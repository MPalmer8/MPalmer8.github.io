import React from 'react';
import { useNavigate } from "react-router-dom";

function ProjectItem({image, name, logos, id}) {
  const navigate = useNavigate()
  return (
      <div 
        className="projectItem" 
        onClick={() => {
          navigate("/projects/" + id)
        }}
      >
          <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
          <h1> <b>{name}</b> </h1>
          {logos}
      </div>
  );
  
}

export default ProjectItem