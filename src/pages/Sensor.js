import React, { useState } from "react";
import Nav from "./layout/Nav";
import classes from "../css/Main.module.css";
import Card from "../components/Card";
import Container from "../css/Container.module.css";
import Layout from "./layout/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SensorChart from "../components/SensorChart.js";
import SensorTable from "../components/SensorTable";
import SensorCont from "../components/SensorCont";

const Sensor = (props) => {
  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [buttonColors, setButtonColors] = useState({}); // 상태로 각 버튼의 배경색을 관리

  const handleButtonClick = (event) => {
    const clickedButton = event.target;
    clickedButton.style.backgroundColor = "rgb(184, 243, 41)";
    setCalenderVisibility(!calenderVisibility);
  };
  return (
    <div>
      <Layout>
        <div className={Container.container}>
          <Nav />
          <main className={classes.main}>
            <SensorCont />
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Sensor;
