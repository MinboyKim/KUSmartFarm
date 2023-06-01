import { Link } from "react-router-dom";
import Navstyle from "../../css/Nav.module.css";
import Profile from "../../components/Profile.js";

const Nav = () => {
  return (
    <nav className={Navstyle.layout}>
      <Profile></Profile>
      <navbar className={Navstyle.navbar}>
        <ul className={Navstyle.navBarMenu}>
          <li className={Navstyle.list}>
            <Link to="/" className={Navstyle.link}>
              메인 화면
            </Link>
          </li>
          <li className={Navstyle.list}>
            환경 센서
            <ul className={Navstyle.link}>
              <li>
                <Link to="/sensor"></Link>
              </li>
              <li>
                <Link to="/sensor"></Link>
              </li>
              <li>
                <Link to="/sensor"></Link>
              </li>
            </ul>
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
