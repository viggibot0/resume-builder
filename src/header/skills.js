import React, {useState} from "react";
import "./formDesign.css";

const Skills = (props) =>{

    const [pos, setpos] = useState(null)

    const [skilltag, setTag] = useState([]);

    const [tagName, setName] = useState("");
    React.useEffect(()=>{
        setTag(props.skill)
    },[props.skill])
    
    const addTag = (e) => {
        e.preventDefault();
        setpos(pos + 1);
        props.onChange(pos,e)
        setName("");
    }

    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>SKILLS</h2></legend>
                <div className="skill-tag">
                    <div className="inner-skill-container">
                        <form onSubmit={(e) => addTag(e)}>
                            <input type="text" placeholder="Ex: HTML" name="tag" onChange={(e) => setName(e.target.value)} value={tagName} required />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            <div className="SkillsContainer">
                <ul className="tag-container">
                    {skilltag.length>0 && skilltag.map(element => <li key={element.id} className="tags">{element.tag}</li>)}
                </ul>
            </div>
            </fieldset>
        </div>
    );
}

export default Skills;
