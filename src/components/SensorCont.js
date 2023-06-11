import Card from "./Card";
import SensorChart from "./SensorChart";
import SensorTable from "./SensorTable";
import classes from "../css/Main.module.css";
import axios from "axios";
import Calendar from "react-calendar";
import { useState } from "react";

const SensorCont = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(""); // 시작 날짜 상태 변수
  const [endDate, setEndDate] = useState(""); // 종료 날짜 상태 변수
  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [buttonColors, setButtonColors] = useState({}); // 상태로 각 버튼의 배경색을 관리

  const handleButtonClick = (event) => {
    const clickedButton = event.target;
    clickedButton.style.backgroundColor = "rgb(184, 243, 41)";
    setCalenderVisibility(!calenderVisibility);
  };

  async function handleClick(sd, ed) {
    setIsLoading(true);
    try {
      const response = await axios.get("https://localhost:8080/data", {
        params: {
          startDate: sd,
          endDate: ed,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    setIsLoading(false);
  }

  return (
    <div>
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
      <Card>
        <div className={classes.graphWrapper}>
          <div className={classes.graphWrapper__header}>
            <h4>조회 날짜</h4>
            <span>2023-03-20 ~ 2023-04-20</span>
          </div>
          {isLoading ? "Loading..." : <SensorChart />}
          <div className={classes.graphWrapper__btn}>
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
          {isLoading ? "Loading..." : <SensorTable />}
        </div>
      </Card>
    </div>
  );
};

export default SensorCont;
