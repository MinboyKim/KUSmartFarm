import React from "react";
import classes from "../css/Main.module.css";
import { Link } from "react-router-dom";
const Main = () => {
  const handleLogin = () => {
    var id = document.getElementById("id");
    var pwd = document.getElementById("pwd");
    if (id.value === "kusmartfarm" && pwd.value === "kukuku") {
      window.location.replace("/sensor");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
      id.value = "";
      pwd.value = "";
    }
  };

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.header}>KU Smart Farm</h1>
      <br />
      <input id="id" type="text" placeholder="아이디" />
      <br />
      <input id="pwd" type="password" placeholder="비밀번호" />
      <br />
      <button className={classes.loginBtn} onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default Main;
