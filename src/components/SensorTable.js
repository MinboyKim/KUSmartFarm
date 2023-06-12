import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import classes from "../css/Main.module.css";
import { useRef } from "react";

const SensorTable = ({ data }) => {
  const ref = useRef();
  const options = {
    title: "환경센서 데이터",
    curveType: "function",
    colors: ["gray", "red", "blue", "orange", "green"],
    titleTextStyle: {
      fontSize: 20,
    },
    legend: { position: "bottom" },
    width: "100%",
    height: "100%",
  };

  const headers = [
    { label: "Date", key: "date" },
    { labe: "CO2", key: "co2" },
    { label: "NH3", key: "nh3" },
    { label: "H2S", key: "h2s" },
    { label: "온도", key: "temperature" },
    { label: "습도", key: "humidity" },
  ];

  const csvData = data.map(([date, co2, nh3, h2s, temperature, humidity]) => ({
    date,
    co2,
    nh3,
    h2s,
    temperature,
    humidity,
  }));

  const onClickPrint = () => {
    handlePrint();
  };

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "환경센서 데이터",
  });

  return (
    <div>
      <div className={classes.tableHeader}>
        <span>
          환경센서 일별 테이블 2023-03-20 ~ 2023-04-20 (출력 : 2023-04-20)
        </span>
        <div>
          <button onClick={onClickPrint} className={classes.tableHeader__btn}>
            인쇄
          </button>
          <CSVLink
            data={csvData}
            headers={headers}
            filename={"환경센서_CSV_데이터"}
          >
            <button className={classes.tableHeader__btn}>CSV 다운로드</button>
          </CSVLink>
        </div>
      </div>
      <Chart ref={ref} chartType="Table" data={data} options={options} />
    </div>
  );
};

export default SensorTable;
