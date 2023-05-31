import React from "react";
import classes from "../css/Main.module.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div>
      <h1 className={classes.title}>Main</h1>
      <Nav />
    </div>
  );
};

export default Main;
