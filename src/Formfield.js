import Header from "./header/header";
import WorkExperience from "./header/workExperience";
import Skills from "./header/skills";
import Achivements from "./header/achivements";
import React from "react";
import { forEachLeadingCommentRange } from "typescript";
const UserDetails = () => {
    const [skill,setSkill]=React.useState([])
    const onChangeSkill = (pos,e) =>{
        setSkill(
            (prev) => {
                return [...prev,{id:pos + 1,tag:e.target[0].value}]
            })
    }

    const formGet = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return(
        <div className="FormFields">
            <h1 style={{textAlign:"center"}}>Resume Builder</h1>
            <form onSubmit={(e => formGet(e))}>
                <Header/>
                <WorkExperience/>
                <Achivements/>
                <button>submit</button>
            </form>
            <Skills skill={skill} onChange={onChangeSkill}/>
        </div>
    );
}

export default UserDetails;
