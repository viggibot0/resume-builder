import "../index.css";

const Workskills = () => {
    return(
        <div className="work-skill-container">
            
            <div className="left-container">
                
                <div className="workExperience">
                    <h2>WORK EXPERIENCE</h2>
                    <h3>Founder, CEO & Lead Designer</h3>
                    <h3>SpaceX - Space Exploration Technologies</h3>
                    <div className="current-place">
                        <span><i>06/2002 - Present</i></span>
                        <span><i>Howthorne, USA</i></span>
                    </div>
                    <div className="more-details">
                        <span><i>Accomplishments</i></span>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="right-container">
                <div className="Skills">
                    <h2>SKILLS & COMPETENCIES</h2>
                    <ul className="skill-tag">
                        <li>thinking thourgh first project</li>
                        <li>marketing</li>
                        <li>Micromanagement</li>
                        <li>Goal oriented</li>
                        <li>resiliency</li>
                        <li>Future focused</li>
                        <li>Leadership</li>
                        <li>Creativity</li>
                        <li>Time Management</li>
                        <li>Presistence</li>
                        <li>Turning Ideas into companies</li>
                        <li>Long-term thinking</li>
                    </ul>
                </div>

                <div className="achievements">
                    <h2>EDUCATION</h2>
                    <div className="workExperience">
                    <h3>MGR College of Research Insitute</h3>
                    <h3>Computer Science</h3>
                    <div className="current-place">
                        <span><i>06/2002 - 06/2003</i></span>
                        <span><i>Chennai, India</i></span>
                    </div>
                    <div className="more-details">
                        <span><i>Grade: A+</i></span>
                        <span><i>Completed</i></span>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Workskills;