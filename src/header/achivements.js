import {useState } from "react";
import useCustomHooks from "./customhooks";

const Achivements = () =>{
   
   const [formPos, setPos] = useState(1);
    
    let formField = 
        <div className="common-container">
        <input type="text" placeholder="College Name"/>
        <input type="text" placeholder="Degree Name"/>
        <input type="text" placeholder="City, Country"/>
        <div className="start-end">
            <div className="start-date"><input type="month" placeholder="start month"/></div>
            <div className="end-date"><input type="month" placeholder="end month"/></div>
        </div>
        <input type="text" placeholder="grade"></input>
        </div>;

    let objectformField = [{id:1,form:formField}]
    const [arrayFormField, setArrayFormField] = useState(objectformField);

    const {appendForm,deleteForm} = useCustomHooks(setArrayFormField,formField,formPos,setPos);

    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>EDUCATION DETAILS</h2></legend>
            <div className="appendChild">
            {arrayFormField.map(element => { return <div key={element.id}>
            <p>form field{element.id}</p>
            {element.id <= 1 ? null : <button className="deletebtn" onClick={e => deleteForm(e,element.id)}>delete</button> }   
            {element.form}</div> })}
            </div>
            <button className="btn" onClick={e => appendForm(e)}>Add More Fields +</button>
            </fieldset>
        </div>
    );
}

export default Achivements;