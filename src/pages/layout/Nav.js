import { Link } from "react-router-dom";
import Navstyle from "../../css/Nav.module.css";
import Profile from "../../components/Profile.js";
import Dropdown from "../../components/Dropdown";
import React from "react";

const Nav = (props) => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);

  const handleButtonClick = () => {
    setDropdownVisibility(!dropdownVisibility);
  };
  const handleButtonClick2 = () => {
    setDropdownVisibility2(!dropdownVisibility2);
  };
  return (
    <nav className={Navstyle.layout}>
      <Profile></Profile>
      <navbar className={Navstyle.navbar}>
        <ul className={Navstyle.navBarMenu}>
          <li className={Navstyle.list} onClick={handleButtonClick}>
            {dropdownVisibility ? "환경센서" : "환경센서 "}
          </li>
          <Dropdown visibility={dropdownVisibility}>
            <ul className={`${Navstyle.link} ${Navstyle.customUl}`}>
              <Link to="/sensor" className={Navstyle.link2}>
                센서1
              </Link>
              <Link to="/sensor" className={Navstyle.link2}>
                센서2
              </Link>
              <Link to="/sensor" className={Navstyle.link2}>
                센서3
              </Link>
            </ul>
          </Dropdown>
          <li className={Navstyle.list} onClick={handleButtonClick2}>
            {dropdownVisibility2 ? "육계저울" : "육계저울 "}
          </li>
          <Dropdown visibility={dropdownVisibility2}>
            <ul className={`${Navstyle.link} ${Navstyle.customUl}`}>
              <Link to="/scale" className={Navstyle.link2}>
                저울1
              </Link>
              <Link to="/scale" className={Navstyle.link2}>
                저울2
              </Link>
              <Link to="/scale" className={Navstyle.link2}>
                저울3
              </Link>
            </ul>
          </Dropdown>
        </ul>
      </navbar>
    </nav>
  );
};

export default Nav;
