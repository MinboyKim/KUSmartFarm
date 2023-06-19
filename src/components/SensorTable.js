import { Chart } from "react-google-charts";
import classes from "../css/Main.module.css";
import { useRef } from "react";

const SensorTable = ({ data }) => {
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

  return (
    <div>
      <div className={classes.tableHeader}>
        <span>
          환경센서 일별 테이블 2023-03-20 ~ 2023-04-20 (출력 : 2023-04-20)
        </span>
        <div></div>
      </div>
      <Chart chartType="Table" data={data} options={options} />
    </div>
  );
};

export default SensorTable;
