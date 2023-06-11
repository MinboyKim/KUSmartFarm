import Card from "./Card";
import SensorChart from "./SensorChart";
import SensorTable from "./SensorTable";
import classes from "../css/Main.module.css";
import axios from "axios";

const SensorCont = () => {
  const handleClick = () => {
    axios.get("http://localhost:8080/data").then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Card>
        <div className={classes.graphWrapper}>
          <div>
            <h4>조회 날짜</h4>
            <span>2023-03-20 ~ 2023-04-20</span>
          </div>
          <div>
            <SensorChart />
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
        <button onClick={handleClick} className={classes.btn}>
          전체 센서 조회
        </button>
        <button className={classes.btn}>시간대별 조회</button>
      </div>
      <Card>
        <div className={classes.tableWrapper}>
          <div>
            <SensorTable />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SensorCont;
