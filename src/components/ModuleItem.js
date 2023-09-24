import React from 'react';
import { useNavigate } from "react-router-dom";

function ModuleItem({code, time, image}) {
  const navigate = useNavigate()
  return (
    <div 
      className="moduleItem" 
      onClick={() => {
        navigate("/TA/" + code)
      }}
    >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> <b>{code}</b> </h1>
        <p> <b>{time}</b> </p>
    </div>
  );
  
}

export default ModuleItem