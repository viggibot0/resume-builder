import { useState } from "react";

const useAddForm = () => {

    const [formField, setFormField] = useState(null)
    const [formPos, setPos] = useState(1);

    let objectformField = [{id:"1",form:formField}]
    console.log(objectformField);
   
    const [arrayFormField, setArrayFormField] = useState(objectformField); 
    
    const appendForm = async (e) => {
        e.preventDefault();
        setPos(formPos + 1);
        let createObj = {id:formPos + 1,form:formField};
        setArrayFormField((prev)=>{
            return [...prev,createObj]
        }); 
    }

    const deleteForm = (e,id) => {
        e.preventDefault();
        setArrayFormField((prev) => {
            return prev.filter(element => element.id != id);
        })
    }

    return [formField,arrayFormField,appendForm, deleteForm]
}

export default useAddForm;