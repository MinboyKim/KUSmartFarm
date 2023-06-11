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
            <Card>
              <div className={classes.dateWrapper}>
                <div>
                  <button className={classes.btn}>1개월</button>
                  <button className={classes.btn}>지난달</button>
                  <button className={classes.btn} onClick={handleButtonClick}>
                    {calenderVisibility ? "기간" : "기간 "}
                  </button>
                  {calenderVisibility && (
                    <div
                      style={{
                        position: "absolute",
                      }}
                    >
                      <div className={classes.Calendar}>
                        <Calendar />
                      </div>
                    </div>
                  )}
                </div>
                <button>조회</button>
              </div>
            </Card>
            <ScaleCont />
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Scale;
