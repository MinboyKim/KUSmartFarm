import axios from "axios";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";

import classes from "../css/Main.module.css";
import myCalendar from "../css/MyCalender.css";

import Card from "./Card";
import ScaleChart from "./ScaleChart";
import ScaleTable from "./ScaleTable";

const ScaleCont = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(""); // 시작 날짜 상태 변수
  const [endDate, setEndDate] = useState(""); // 종료 날짜 상태 변수
  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [chartData, setChartData] = useState([]);
  const scaleNum = props.scaleNum;

  const clickOneMonth = (event) => {
    const today = new Date();
    const year = today.getFullYear(); // 현재 년도를 가져옵니다.
    var month = today.getMonth(); // 현재 월을 가져옵니다.
    if (month != 1) {
      month = month - 1;
    } else {
      month = 12;
    }
    const day = today.getDate();
    const lastMonthDate = new Date(year, month, day);
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

  const onChangeCalender = (e) => {
    // event를 받아서 yyyy/mm/dd 형식으로 일자를 포맷팅해줌
    // e[0]은 사용자가 여행 일자로 선택한 시작 일자가 들어감
    // e[1]은 사용자가 여행 마치는 일자로 선택한 일자가 들어감
    const startDateFormat = moment(e[0]).format("YYYYMMDD");
    const endDateFormat = moment(e[1]).format("YYYYMMDD");
    // 여행 시작일자와 마치는일자의 값이 변할 때마다 값을 다시 세팅해줌
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  const check = () => {
    console.log(startDate, endDate);
    handleClick(startDate, endDate);
  };

  const formatDate = (date) => {
    console.log(date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  async function handleClick(sd, ed) {
    setIsLoading(true);
    try {
      const dataLink = "http://localhost:8080/scaleData" + scaleNum;

      const response = await axios.get(dataLink, {
        params: {
          startDate: sd,
          endDate: ed,
        },
      });

      const averages = calculateAverages(response.data);
      const chartArray = averages.map((obj) => {
        return [
          obj.WRT_DATE,
          obj.TOTAL_SCALE,
          obj.AI_SCALE,
          obj.SCALE_PER_ANIMAL,
        ];
      });
      chartArray.unshift([
        "Date",
        "총 저울 측정값",
        "AI 분석 마릿수",
        "마리당 무게",
      ]);
      setChartData(chartArray);
      console.log(chartData);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    setIsLoading(false);
  }

  function calculateAverages(data) {
    const groups = {};

    for (const obj of data) {
      const { WRT_DATE } = obj;
      if (!groups[WRT_DATE]) {
        groups[WRT_DATE] = {
          count: 0,
          sumTOTAL_SCALE: 0,
          sumAI_SCALE: 0,
          sumSCALE_PER_ANIMAL: 0,
        };
      }

      groups[WRT_DATE].count++;
      groups[WRT_DATE].sumTOTAL_SCALE += +obj.SCALE_DATA.toFixed(3);
      groups[WRT_DATE].sumAI_SCALE += +obj.COUNT_DATA.toFixed(3);
      groups[WRT_DATE].sumSCALE_PER_ANIMAL += +obj.WEIGHT_DATA.toFixed(3);
    }

    const averages = [];
    for (const key in groups) {
      const group = groups[key];
      const { count } = group;

      averages.push({
        WRT_DATE: key,
        TOTAL_SCALE: +(group.sumTOTAL_SCALE / count).toFixed(3),
        AI_SCALE: +(group.sumAI_SCALE / count).toFixed(3),
        SCALE_PER_ANIMAL: +(group.sumSCALE_PER_ANIMAL / count).toFixed(3),
      });
    }

    return averages;
  }

  return (
    <div>
      <Card>
        <div className={classes.dateWrapper}>
          <div>
            <button
              className={classes.btn}
              onClick={clickOneMonth}
              style={{
                backgroundColor:
                  selectedButton === "b1"
                    ? "rgb(184, 243, 41)"
                    : "rgb(255, 255, 255)",
              }}
            >
              1개월
            </button>
            <button
              className={classes.btn}
              onClick={clickLastMonth}
              style={{
                backgroundColor:
                  selectedButton === "b2"
                    ? "rgb(184, 243, 41)"
                    : "rgb(255, 255, 255)",
              }}
            >
              지난달
            </button>
            <button
              className={classes.btn}
              onClick={handleButtonClick}
              style={{
                backgroundColor:
                  selectedButton === "b3"
                    ? "rgb(184, 243, 41)"
                    : "rgb(255, 255, 255)",
              }}
            >
              {calenderVisibility ? "기간" : "기간 "}
            </button>
            {calenderVisibility && (
              <div
                style={{
                  position: "absolute",
                }}
              >
                <div className={classes.Calendar}>
                  <Calendar
                    onChange={onChangeCalender}
                    selectRange={true}
                    formatDay={(locale, date) => moment(date).format("DD")}
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
          <div>조회 저울 : 저울{scaleNum} </div>
          <div className={classes.graphWrapper__header}>
            <h4>조회 날짜</h4>

            <span>
              {startDate}
              {startDate && endDate && "~"}
              {endDate}
            </span>
          </div>
          {!isLoading && chartData.length > 1 && (
            <ScaleChart data={chartData} />
          )}
          {!isLoading && chartData.length === 1 && "Found no data"}
          {isLoading && "Loading…"}
        </div>
      </Card>
      <div className={classes.show}>
        <button className={classes.btn}>전체 센서 조회</button>
        <button className={classes.btn}>시간대별 조회</button>
      </div>
      <Card>
        <div className={classes.tableWrapper}>
          {!isLoading && chartData.length > 1 && (
            <ScaleTable data={chartData} />
          )}
          {!isLoading && chartData.length === 1 && "Found no data"}
          {isLoading && "Loading…"}
        </div>
      </Card>
    </div>
  );
};

export default ScaleCont;
