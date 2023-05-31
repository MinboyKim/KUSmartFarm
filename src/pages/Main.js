import React from "react";
import classes from "../css/Main.module.css";
import Nav from "./layout/Nav";
import Card from "../components/Card";

const Main = () => {
  return (
    <div>
      <h1 className={classes.title}>Main</h1>
      <Nav />
      <main className={classes.main}>
        메인 페이지 입니다.
        <Card>
          <h2>테스트</h2>
        </Card>
        <Card>
          <h2>테스트</h2>
        </Card>
        <Card>
          <h2>테스트</h2>
        </Card>
      </main>
    </div>
  );
};

export default Main;
