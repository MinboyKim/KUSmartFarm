import classes from "../css/Nav.module.css";
import { Link } from "react-router-dom";
import Profiles from "../css/Profile.module.css";

const Profile = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return (
    <div className={Profiles.back}>
      <div className={Profiles.image}>
        <img src={require("../images/kuprofile.png")} width="70px"></img>
      </div>
      <div className={Profiles.text}>
        <p>우리농장</p>
        <br />
        <p>안녕하세요.</p>
        <p>
          최근접속:{year}년 {month}월 {day}일
        </p>
      </div>
    </div>
  );
};

export default Profile;
