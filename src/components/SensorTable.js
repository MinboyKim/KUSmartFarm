import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import classes from "../css/Main.module.css";
import { useRef } from "react";

const SensorTable = () => {
  const ref = useRef();
  const data = [
    ["Date", "CO2", "NH3", "H2S", "온도", "습도"],
    ["2021-04-01", 100, 200, 300, 400, 500],
    ["2021-04-02", 200, 300, 400, 500, 600],
    ["2021-04-03", 300, 400, 500, 600, 700],
    ["2021-04-04", 400, 500, 600, 700, 800],
    ["2021-04-05", 500, 600, 700, 800, 900],
  ];
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

  const slicedData = data.slice(1);
  const headers = [
    { label: "Date", key: "date" },
    { labe: "CO2", key: "co2" },
    { label: "NH3", key: "nh3" },
    { label: "H2S", key: "h2s" },
    { label: "온도", key: "temperature" },
    { label: "습도", key: "humidity" },
  ];

  const csvData = slicedData.map(
    ([date, co2, nh3, h2s, temperature, humidity]) => ({
      date,
      co2,
      nh3,
      h2s,
      temperature,
      humidity,
    })
  );

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
