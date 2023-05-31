import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
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
