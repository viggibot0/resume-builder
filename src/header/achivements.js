import { useEffect, useState } from "react";
import useAddForm from "./customHooks";

const Achivements = () =>{

   const  [setFormField,arrayFormField,setArrayFormField,appendForm, deleteForm] = useAddForm();
    
    let formField = 
        <div className="common-container">
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Company Name"/>
        <input type="text" placeholder="Phone Number"/>
        <input type="text" placeholder="City, Country"/>
        <div>
            <input type="month"/> <input type="year"/>
        </div>
        <div className="textEditor">
            <textarea></textarea>
        </div>
        </div>;

    setFormField(formField);    

    let objectformField = {id:1,form:formField}
    setArrayFormField(objectformField);
    
    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>EDUCATION DETAILS</h2></legend>
            <div className="appendChild">
            {arrayFormField.map(element => { return <div key={element.id}>
            <p>form field{element.id}</p>
            {element.id <= 1 ? null : <button onClick={e => deleteForm(e,element.id)}>delete</button> }   
            {element.form}</div> })}
            </div>
            <button className="btn" onClick={e => appendForm(e)}>Add More Fields +</button>
            </fieldset>
        </div>
    );
}

export default Achivements;