import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import classes from "../../css/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.allWrapper}>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </div>
  );
};

export default Layout;
