import React from "react";
import Nav from "./layout/Nav";
import classes from "../css/Scale.module.css";
import Card from "../components/Card";
import Container from "../css/Container.module.css";

const Scale = () => {
  return (
    <div>
      <h1>Scale</h1>
      <div className={Container.container}>
        <Nav />
        <main className={classes.main}>
          육계 저울 페이지 입니다.
          <Card>
            <h2>테스트</h2>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Scale;
