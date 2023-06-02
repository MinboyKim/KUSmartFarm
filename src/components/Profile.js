import classes from "../css/Nav.module.css";
import { Link } from "react-router-dom";
import Profiles from "../css/Profile.module.css";

const Profile = () => {
  return (
    <div className={Profiles.back}>
      <div className={Profiles.image}></div>
      <div className={Profiles.text}>
        <p>우리농장</p>
        <br />
        <p>안녕하세요 강대훈님</p>
        <p>최근접속:2023년 06월 1일</p>
      </div>
    </div>
  );
};

export default Profile;
