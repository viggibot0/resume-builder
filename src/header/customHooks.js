import { useState } from "react";

const useAddForm = () => {

    const [formField, setFormField] = useState(null)
    const [formPos, setPos] = useState(1);

    const [arrayFormField, setArrayFormField] = useState([]); 
    
    const appendForm = (e) => {
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

    return [setFormField,arrayFormField,setArrayFormField,appendForm, deleteForm]
}

export default useAddForm;