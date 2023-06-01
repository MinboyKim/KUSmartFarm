import classes from "../../css/Header.module.css";

const Header = () => {
  return (
    <header className={classes.wrapper}>
      <div>
        <h1>건국 Smart Farm</h1>
      </div>
      <div>
        <nav className={classes.gnb}>
          <ul className={classes.ul}>
            <li>공지사항</li>
            <li>사용자 관리</li>
            <li>설정</li>
            <li>알림</li>
            <li>박대원</li>
            <li>menu</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
