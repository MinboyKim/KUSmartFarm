import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </div>
  );
};

export default Layout;
