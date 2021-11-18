import React from "react";
import HeaderDesign from "./resume-design/HeaderDesign";
import Workskills from "./resume-design/work&skills";

const FullDesign = () => {
    return(
        <React.Fragment>
            <HeaderDesign/>
            <Workskills/>
        </React.Fragment>
    )
}

export default FullDesign;