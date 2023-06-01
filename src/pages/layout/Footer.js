import classes from "../../css/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div>
          <img src={require("../../images/logo_rect.png")} width="150px"></img>
        </div>
        <div className={classes.footerSpan}>
          <div>
            <span>건국대학교</span>
            <span>주소 : 서울특별시 광진구 능동로 120</span>
            <span>전화번호 : 02-450-3114</span>
          </div>
          <span className={classes.copyright}>
            Copyright 2023 Minboy&KangManjoo.ALL RIGHT RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
