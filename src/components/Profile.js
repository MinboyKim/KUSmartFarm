import classes from "../css/Nav.module.css";
import { Link } from "react-router-dom";
import Profiles from "../css/Profile.module.css";

const Profile = ()=> {
    return (
        <div>
            <div className={Profiles.image}>
                <h2>여기는 이미지 입니다.</h2>
            </div>
        </div>
    );
};

export default Profile;