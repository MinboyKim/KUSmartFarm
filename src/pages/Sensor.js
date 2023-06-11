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
