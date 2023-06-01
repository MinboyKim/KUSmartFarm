import { Link } from "react-router-dom";
import classes from "../../css/Nav.module.css";
import Profiles from "../../css/Profile.module.css";
import Profile from "../../components/Profile.js";

const Nav = () => {
  return (
    <nav className={classes.layout}>
        <Profile>
        </Profile>
      <ul>
        <li>
          <Link to="/">메인 화면</Link>
        </li>
        <li>
          <Link to="/sensor">환경 센서</Link>
        </li>
        <li>
          <Link to="/scale">육계 저울</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
