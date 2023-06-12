import "react-calendar/dist/Calendar.css";

import React, { useState } from "react";
import Calendar from "react-calendar";

import Card from "../components/Card";
import ScaleChart from "../components/ScaleChart";
import ScaleTable from "../components/ScaleTable";
import Container from "../css/Container.module.css";
import classes from "../css/Main.module.css";
import ScaleCont from "../components/ScaleCont";
import Layout from "./layout/Layout";
import Nav from "./layout/Nav";

const Scale = (props) => {
  const [calenderVisibility, setCalenderVisibility] = useState(false);

  const handleButtonClick = () => {
    setCalenderVisibility(!calenderVisibility);
  };

  return (
    <div>
      <Layout>
        <div className={Container.container}>
          <Nav />
          <main className={classes.main}>
            <ScaleCont />
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Scale;
