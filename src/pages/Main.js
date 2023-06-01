import React from "react";
import classes from "../css/Main.module.css";
import Nav from "./layout/Nav";
import Card from "../components/Card";
import Container from "../css/Container.module.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Link to="/sensor">링크</Link>
    </div>
  );
};

export default Main;
