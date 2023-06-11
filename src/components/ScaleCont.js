import Card from "./Card";
import ScaleChart from "./ScaleChart";
import ScaleTable from "./ScaleTable";
import classes from "../css/Main.module.css";
import { useState } from "react";

const ScaleCont = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Card>
        <div className={classes.graphWrapper}>
          <div className={classes.graphWrapper__header}>
            <h4>조회 날짜</h4>
            <span>2023-03-20 ~ 2023-04-20</span>
          </div>
          {isLoading ? "Loading..." : <ScaleChart />}
        </div>
      </Card>
      <div className={classes.show}>
        <button className={classes.btn}>전체 센서 조회</button>
        <button className={classes.btn}>시간대별 조회</button>
      </div>
      <Card>
        <div className={classes.tableWrapper}>
          {isLoading ? "Loading..." : <ScaleTable />}
        </div>
      </Card>
    </div>
  );
};

export default ScaleCont;
