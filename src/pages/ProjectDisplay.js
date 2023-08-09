import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@material-ui/icons/Language';
import Link from "@material-ui/core/Link"
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className="project">
        <h1> {project.name} </h1>
        <div className="team">
          <p>{project.team}</p>
        </div>
        <img src={project.image} alt=""/>
        {iconDisplay(project)}
        <p><b>Developed Using:</b><br></br> {project.skills}</p>
        <div className="description">
          <p><b>Description:</b> 
          {descriptionSection(project.description)}</p>
        </div>
    </div>
  );
}

function iconDisplay(index){
  if(index.site !== "" && index.repo !== ""){
    return(
      <div className="icondisplay">
        <Link href={index.repo} target="_blank"><GitHubIcon /></Link>
        <Link href={index.site} target="_blank"><LanguageIcon /></Link>
      </div>
    );
  }
  else if (index.site !== ""){
    return(
      <div className="icondisplay">
        <Link href={index.site} target="_blank"><LanguageIcon /></Link>
      </div>
    );
  }
  else if (index.repo !== ""){
    return(
      <div className="icondisplay">
        <Link href={index.repo} target="_blank"><GitHubIcon /></Link>
      </div>
    );
  }
  else{
    return <></>;
  }
};

function descriptionSection(elements) {
  return(
      <ul>
          {elements.map(item => {
          return <li>{item}</li>;
          })}
      </ul>
  )
}

export default ProjectDisplay
