import Card from "./Card";
import SensorChart from "./SensorChart";
import SensorTable from "./SensorTable";
import classes from "../css/Main.module.css";
import axios from "axios";
import Calendar from "react-calendar";
//import { Calendar } from 'react-date-range';
import 'react-calendar/dist/Calendar.css'
import { useState } from "react";
import moment from "moment";

const SensorCont = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(""); // 시작 날짜 상태 변수
  const [endDate, setEndDate] = useState(""); // 종료 날짜 상태 변수
  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedRange, setSelectedRange] = useState([null, null]);
 

  const clickOneMonth = (event) => {
    const today = new Date();
    const year = today.getFullYear(); // 현재 년도를 가져옵니다.
    const month = today.getMonth(); // 현재 월을 가져옵니다.
    const lastMonthDate = new Date(year, month, -30);
    setStartDate(formatDate(lastMonthDate));
    setEndDate(formatDate(today));
    setSelectedButton("b1");
    setCalenderVisibility(false);
  };

  const clickLastMonth = (event) => {
    const currentDate = new Date(); // 현재 날짜를 가져옵니다.
    const year = currentDate.getFullYear(); // 현재 년도를 가져옵니다.
    const month = currentDate.getMonth(); // 현재 월을 가져옵니다.
    const lastMonthLastDate = new Date(year, month, 0);
    const lastMonthFirstDate = new Date(year, month - 1, 1);
    console.log(lastMonthFirstDate);
    console.log(lastMonthLastDate);

    setStartDate(formatDate(lastMonthFirstDate));
    setEndDate(formatDate(lastMonthLastDate));
    setSelectedButton("b2");
    setCalenderVisibility(false);
  };

  const handleButtonClick = (event) => {
    setSelectedButton("b3");
    setCalenderVisibility(!calenderVisibility);
  };

const onChangeCalender = (date) => {
    // const selectedStartDate = moment(e[0]).format("YYYYMMDD");
    // const selectedEndDate = moment(e[1]).format("YYYYMMDD");
    setSelectedRange(date);
    setStartDate(selectedRange[0]);
    setEndDate(selectedRange[1]);
  };



  const check = () => {
    console.log(startDate, endDate);
    //handleClick(startDate, endDate);
  }


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

  const formatDate = (date) => {
    console.log(date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };


  return (
    <div>
      <Card>
        <div className={classes.dateWrapper}>
          <div>
            <button className={classes.btn} onClick={clickOneMonth}   style={{
    backgroundColor: selectedButton === "b1" ? "rgb(184, 243, 41)" : "rgb(255, 255, 255)",
  }}>1개월</button>
            <button className={classes.btn} onClick={clickLastMonth} style={{
    backgroundColor: selectedButton === "b2" ? "rgb(184, 243, 41)" : "rgb(255, 255, 255)",
  }}>지난달</button>
            <button className={classes.btn} onClick={handleButtonClick} style={{
    backgroundColor: selectedButton === "b3" ? "rgb(184, 243, 41)" : "rgb(255, 255, 255)",
  }}>
              {calenderVisibility ? "기간" : "기간 "}
            </button>
            {calenderVisibility && (
              <div
                style={{
                  position: "absolute",
                }}
              >
                <div className={classes.Calendar}>
                  <Calendar onChange={onChangeCalender}

                    // selectRange={true}
                    // nextLabel={<NextIcon />}
                    // prevLabel={<PrevIcon />}
                    // next2Label={null}
                    // prev2Label={null}
                    // showNeighboringMonth={false}
                  />
                </div>
              </div>
            )}
          </div>
          <button onClick={check}>조회</button>
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
        <button className={classes.btn} onClick={check}>시간대별 조회</button>
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
