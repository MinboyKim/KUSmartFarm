import { Link } from "react-router-dom";
import Navstyle from "../../css/Nav.module.css";
import Profile from "../../components/Profile.js";

const Nav = () => {
  return (
    <nav className={Navstyle.layout}>
      <Profile></Profile>
      <navbar className={Navstyle.navbar}>
        <ul className={Navstyle.navBarMenu}>
          <li>
            <Link to="/sensor" className={Navstyle.link}>
              환경 센서
            </Link>
          </li>
          <li>
            <Link to="/scale" className={Navstyle.list}>
              육계 저울
            </Link>
          </li>
        </ul>
      </navbar>
    </nav>
  );
};

export default Nav;
