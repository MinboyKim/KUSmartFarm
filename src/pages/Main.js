import React from "react";
import classes from "../css/Main.module.css";
import Nav from "./layout/Nav";

const Main = () => {
  return (
    <div>
      <h1 className={classes.title}>Main</h1>
      <Nav />
      <main>메인 페이지 입니다.</main>
    </div>
  );
};

export default Main;
