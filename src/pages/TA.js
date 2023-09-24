import React from 'react';
import "../styles/TA.css";
import ModuleItem from "../components/ModuleItem";
import SEG from "../assets/TA/SEG.jpg";

function TA(){
    return (
    <div className="TA">
        <h1 class="TAMain">Modules</h1>
        <div className="moduleList">
            <ModuleItem code="5CCS2SEG" time="2023/24" image={SEG}/>
        </div>
    </div>
    
    );
}


export default TA