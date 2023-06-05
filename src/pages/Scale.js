import React, { useState } from "react";
import Nav from "./layout/Nav";
import classes from "../css/Main.module.css";
import Card from "../components/Card";
import Container from "../css/Container.module.css";
import Layout from "./layout/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ScaleChart from "../components/ScaleChart";
import ScaleTable from "../components/ScaleTable";

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
                    {calenderVisibility ? "기간 ▽" : "기간 "}
                  </button>
                  {calenderVisibility && (
                    <div
                      style={{
                        position: "absolute",
                      }}
                    >
                      <Calendar />
                    </div>
                  )}
                </div>
                <button>조회</button>
              </div>
            </Card>
            <Card>
              <div className={classes.graphWrapper}>
                <div>
                  <h4>조회 날짜</h4>
                  <span>2023-03-20 ~ 2023-04-20</span>
                </div>
                <div>
                  <ScaleChart />
                </div>
              </div>
            </Card>
            <div className={classes.show}>
              <button className={classes.btn}>전체 센서 조회</button>
              <button className={classes.btn}>시간대별 조회</button>
            </div>
            <Card>
              <div className={classes.tableWrapper}>
                <div className={classes.tableHeader}>
                  <span>
                    환경센서 일별 테이블 2023-03-20 ~ 2023-04-20 (출력 :
                    2023-04-20)
                  </span>
                  <span>출력 및 다운로드</span>
                </div>
                <div>
                  <ScaleTable />
                </div>
              </div>
            </Card>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default Scale;
