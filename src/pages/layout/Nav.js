import { Link } from "react-router-dom";
import Navstyle from "../../css/Nav.module.css";
import Profile from "../../components/Profile.js";
import Dropdown from "../../components/Dropdown";
import React from "react";

const Nav = (props) => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);

  return (
    <nav className={Navstyle.layout}>
      <Profile></Profile>
      <navbar className={Navstyle.navbar}>
        <ul className={Navstyle.navBarMenu}>
          <li
            className={Navstyle.list}
            onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
          >
            환경센서
          </li>
          <Dropdown visibility={dropdownVisibility}>
            <ul className={`${Navstyle.link} ${Navstyle.customUl}`}>
              <li className={Navstyle.list2}>
                <Link to="/sensor">센서1</Link>
              </li>
              <li>
                <Link to="/sensor">센서2</Link>
              </li>
              <li>
                <Link to="/sensor">센서3</Link>
              </li>
            </ul>
          </Dropdown>
          <li
            className={Navstyle.list}
            onClick={(e) => setDropdownVisibility2(!dropdownVisibility2)}
          >
            육계 저울
          </li>
          <Dropdown visibility={dropdownVisibility2}>
            <ul className={`${Navstyle.link} ${Navstyle.customUl}`}>
              <li>
                <Link to="/scale">저울1</Link>
              </li>
              <li>
                <Link to="/scale">저울2</Link>
              </li>
              <li>
                <Link to="/scale">저울3</Link>
              </li>
            </ul>
          </Dropdown>
        </ul>
      </navbar>
    </nav>
  );
};

export default Nav;
