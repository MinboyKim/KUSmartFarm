import React from "react";
import Nav from "./layout/Nav";
import classes from "../css/Main.module.css";
import Card from "../components/Card";
import Container  from "../css/Container.module.css";

const Sensor = () => {
    return (
      <div>
        <div className={Container.container}>
          <Nav />
          <main className={classes.main}>
              <Card>
              <div className={classes.dateWrapper}>
                  <div>
                  <button className={classes.btn}>1개월</button>
                  <button className={classes.btn}>지난달</button>
                  <button className={classes.btn}>기간</button>
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
                  <h1>그래프</h1>
                  </div>
                  <div>
                  <button className={classes.btn}>이산화탄소</button>
                  <button className={classes.btn}>암모니아</button>
                  <button className={classes.btn}>황화수소</button>
                  <button className={classes.btn}>온도</button>
                  <button className={classes.btn}>습도</button>
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
                      환경센서 일별 테이블 2023-03-20 ~ 2023-04-20 (출력 : 2023-04-20)
                  </span>
                  <span>출력 및 다운로드</span>
                  </div>
                  <div>
                  <h1>표</h1>
                  </div>
              </div>
              </Card>
          </main>
          </div>
      </div>
    );
  };

export default Sensor;
