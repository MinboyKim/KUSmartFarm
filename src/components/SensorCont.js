import axios from "axios";
import { hoursToMilliseconds, set } from "date-fns";
import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import classes from "../css/Main.module.css";
import myCalendar from "../css/MyCalender.css";
import calculateAlldata from "./calculateAlldata";
import Card from "./Card";
import SensorChart from "./SensorChart";
import SensorAllTable from "./SensorAllTable";
import SensorTimeTable from "./SensorTimeTable";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import calculateTimedata from "./calculateTimeData";

const SensorCont = (props) => {
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(""); // 시작 날짜 상태 변수
  const [endDate, setEndDate] = useState(""); // 종료 날짜 상태 변수
  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [chartData, setChartData] = useState([]);
  const [allSensorData, setAllSensorData] = useState([]);
  const [timeSensorData, setTimeSensorData] = useState([]);
  const [Data, setData] = useState([]);

  const [csvAlldata, setCsvAlldata] = useState([]);
  const [csvTimedata, setCsvTimedata] = useState([]);
  const [tableFlag, setTableFlag] = useState(false);
  const [csvHeader, setCsvHeader] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const sensorNum = props.sensorNum;

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
    setCalenderVisibility(false);
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
      const dataLink = "http://localhost:8080/sensorData" + sensorNum;

      const response = await axios.get(dataLink, {
        params: {
          startDate: sd,
          endDate: ed,
        },
      });
      setData(response.data);
      const averages = calculateAverages(Data);
      const calculatedAlldata = calculateAlldata(Data);
      const timeData = calculateTimedata(Data);

      const chartArray = averages.map((obj) => {
        return [
          obj.WRT_DATE,
          obj.AVG_CO2,
          obj.AVG_NH3,
          obj.AVG_H2S,
          obj.AVG_HUMT,
          obj.AVG_TEMP,
        ];
      });
      chartArray.unshift(["Date", "CO2", "NH3", "H2S", "HUMT", "TEMP"]);
      setChartData(chartArray);

      const allSensorArray = calculatedAlldata.map((obj) => {
        return [
          obj.WRT_DATE,
          obj.MIN_CO2,
          obj.MAX_CO2,
          obj.AVG_CO2,
          obj.MIN_NH3,
          obj.MAX_NH3,
          obj.AVG_NH3,
          obj.MIN_H2S,
          obj.MAX_H2S,
          obj.AVG_H2S,
          obj.MIN_HUMT,
          obj.MAX_HUMT,
          obj.AVG_HUMT,
          obj.MIN_TEMP,
          obj.MAX_TEMP,
          obj.AVG_TEMP,
        ];
      });
      setAllSensorData(allSensorArray);

      const csvAllArray = allSensorArray.map(
        ([
          date,
          co2_lo,
          co2_hi,
          co2_avg,
          nh3_lo,
          nh3_hi,
          nh3_avg,
          h2s_lo,
          h2s_hi,
          h2s_avg,
          humt_lo,
          humt_hi,
          humt_avg,
          temp_lo,
          temp_hi,
          temp_avg,
        ]) => ({
          date,
          co2_lo,
          co2_hi,
          co2_avg,
          nh3_lo,
          nh3_hi,
          nh3_avg,
          h2s_lo,
          h2s_hi,
          h2s_avg,
          humt_lo,
          humt_hi,
          humt_avg,
          temp_lo,
          temp_hi,
          temp_avg,
        })
      );
      setCsvAlldata(csvAllArray);

      const allTimeArray = [];
      for (const date in timeData) {
        const timeDataForDate = timeData[date];

        for (const hour in timeDataForDate) {
          const data = timeDataForDate[hour];
          const { CO2, NH3, H2S, HUMT, TEMP } = data;
          if (hour < 9) {
            var time = "0" + hour + " ~ " + "0" + (parseInt(hour) + 1);
          } else if (hour == 9) {
            var time = "0" + hour + " ~ " + (parseInt(hour) + 1);
          } else {
            var time = hour + " ~ " + (parseInt(hour) + 1);
          }
          allTimeArray.push([date, time, TEMP, HUMT, CO2, NH3, H2S]);
        }
      }
      setTimeSensorData(allTimeArray);

      const csvTimeArray = allTimeArray.map(
        ([date, time, co2, nh3, h2s, humt, temp]) => ({
          date,
          time,
          co2,
          nh3,
          h2s,
          humt,
          temp,
        })
      );
      setCsvTimedata(csvTimeArray);
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
          sumCO2: 0,
          sumNH3: 0,
          sumHUMT: 0,
          sumTEMP: 0,
          sumH2S: 0,
        };
      }

      groups[WRT_DATE].count++;

      groups[WRT_DATE].sumCO2 += +obj.CO2_DATA.toFixed(2);
      groups[WRT_DATE].sumH2S += +obj.H2S_DATA.toFixed(2);
      groups[WRT_DATE].sumNH3 += +obj.NH3_DATA.toFixed(2);
      groups[WRT_DATE].sumHUMT += +obj.HUMT_DATA.toFixed(2);

      groups[WRT_DATE].sumTEMP += +obj.TEMP_DATA.toFixed(2);
    }

    const averages = [];
    for (const key in groups) {
      const group = groups[key];
      const { count } = group;

      averages.push({
        WRT_DATE: key,

        AVG_CO2: +(group.sumCO2 / count).toFixed(3),
        AVG_NH3: +(group.sumNH3 / count).toFixed(3),
        AVG_H2S: +(group.sumH2S / count).toFixed(3),
        AVG_HUMT: +(group.sumHUMT / count).toFixed(3),
        AVG_TEMP: +(group.sumTEMP / count).toFixed(3),
      });
    }

    return averages;
  }

  const headers = [
    { label: "Date", key: "date" },
    { label: "Time", key: "time" },
    { label: "CO2", key: "co2" },
    { label: "NH3", key: "nh3" },
    { label: "H2S", key: "h2s" },
    { label: "HUMT", key: "humt" },
    { label: "TEMP", key: "temp" },
  ];

  const headersAll = [
    { label: "Date", key: "date" },
    { label: "CO2_LOW", key: "co2_lo" },
    { label: "CO2_HIGH", key: "co2_hi" },
    { label: "CO2_AVG", key: "co2_avg" },
    { label: "NH3_LOW", key: "nh3_lo" },
    { label: "NH3_HIGH", key: "nh3_hi" },
    { label: "NH3_AVG", key: "nh3_avg" },
    { label: "H2S_LOW", key: "h2s_lo" },
    { label: "H2S_HIGH", key: "h2s_hi" },
    { label: "H2S_AVG", key: "h2s_avg" },
    { label: "HUMT_LOW", key: "humt_lo" },
    { label: "HUMT_HIGH", key: "humt_hi" },
    { label: "HUMT_AVG", key: "humt_avg" },
    { label: "TEMP_LOW", key: "temp_lo" },
    { label: "TEMP_HIGH", key: "temp_hi" },
    { label: "TEMP_AVG", key: "temp_avg" },
  ];

  const onClickPrint = () => {
    handlePrint();
  };

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "환경센서 데이터",
  });

  const timeClickHandle = () => {
    setCsvData(csvTimedata);
    setCsvHeader(headers);
    setTableFlag(true);
  };

  const allClickHandle = () => {
    setCsvData(csvAlldata);
    setCsvHeader(headersAll);
    setTableFlag(false);
  };

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
          <div>조회 센서 : 센서{sensorNum} </div>
          <div className={classes.graphWrapper__header}>
            <h4>조회 날짜</h4>
            <span>
              {startDate}
              {startDate && endDate && " ~ "}
              {endDate}
            </span>
          </div>
          {!isLoading && chartData.length > 1 && (
            <SensorChart data={chartData} />
          )}
          {!isLoading && chartData.length === 1 && "Found no data"}
          {isLoading && "Loading..."}
        </div>
      </Card>
      <div className={classes.show}>
        <button className={classes.btn} onClick={allClickHandle}>
          전체 센서 조회
        </button>
        <button className={classes.btn} onClick={timeClickHandle}>
          시간대별 조회
        </button>
      </div>
      <Card>
        <div className={classes.tableWrapper}>
          <div className={classes.tableHeader}>
            <span>
              환경센서 일별 테이블 {startDate}
              {startDate && endDate && " ~ "}
              {endDate}
              {endDate && " 출력일 : "}
              {new Date().toLocaleDateString()}
            </span>
            <div>
              <button
                onClick={onClickPrint}
                className={classes.tableHeader__btn}
              >
                인쇄
              </button>
              <CSVLink
                data={csvData}
                headers={csvHeader}
                filename={"환경센서_CSV_데이터"}
              >
                <button className={classes.tableHeader__btn}>
                  CSV 다운로드
                </button>
              </CSVLink>
            </div>
          </div>
          {!isLoading && allSensorData.length > 1 && !tableFlag && (
            <SensorAllTable ref={ref} data={allSensorData} />
          )}
          {!isLoading && timeSensorData.length > 1 && tableFlag && (
            <SensorTimeTable ref={ref} data={timeSensorData} />
          )}
          {!isLoading && chartData.length === 1 && "Found no data"}
          {isLoading && "Loading..."}
        </div>
      </Card>
    </div>
  );
};

export default SensorCont;
