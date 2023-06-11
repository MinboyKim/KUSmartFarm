import Card from "./Card";
import ScaleChart from "./ScaleChart";
import ScaleTable from "./ScaleTable";
import classes from "../css/Main.module.css";

const ScaleCont = () => {
  return (
    <div>
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
          <div>
            <ScaleTable />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScaleCont;
