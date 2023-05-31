import React from "react";
import Nav from "./layout/Nav";
import classes from "../css/Scale.module.css";
import Card from "../components/Card";

const Scale = () => {
  return (
    <div>
      <h1>Scale</h1>
      <Nav />
      <main>
        육계 저울 페이지 입니다.
        <Card>
          <h2>테스트</h2>
        </Card>
      </main>
    </div>
  );
};

export default Scale;
