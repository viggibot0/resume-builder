import Header from "./header/header";
import WorkExperience from "./header/workExperience";
import Skills from "./header/skills";
import Achivements from "./header/achivements";

const UserDetails = () => {
    return(
        <div className="FormFields">
            <form>
                <Header/>
                <WorkExperience/>
                <Achivements/>
                <Skills/>
            </form>
        </div>
    );
}

export default UserDetails;