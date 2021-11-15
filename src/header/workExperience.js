const WorkExperience = () =>{
    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>WORK EXPERIENCES</h2></legend>
                <div className="common-container">
                    <input type="text" placeholder="Title" required />
                    <input type="text" placeholder="Company Name" required />
                    <input type="text" placeholder="Phone Number"/>
                    <input type="text" placeholder="City, Country"/>
                    <div>
                        <input type="month"required/> <input type="year"required/>
                    </div>
                    <div className="textEditor">
                        <textarea></textarea>
                    </div>
                </div>
            <button className="btn">Add More Fields +</button>
            </fieldset>
        </div>
    );
}

export default WorkExperience;