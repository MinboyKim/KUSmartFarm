import { Chart } from "react-google-charts";
import Sensor from "../pages/Sensor";

const SensorChart = () => {
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
    width: 800,
    height: 400,
  };

  return (
    <div>
      <Chart chartType="LineChart" data={data} options={options} />
    </div>
  );
};

export default SensorChart;
