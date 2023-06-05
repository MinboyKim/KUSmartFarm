import { Chart } from "react-google-charts";

const ScaleChart = () => {
  const data = [
    ["Date", "총 저울 측정값", "AI 분석 마릿수", "마리당 무게"],
    ["2021-04-01", 100, 200, 300],
    ["2021-04-02", 200, 300, 400],
    ["2021-04-03", 300, 400, 500],
    ["2021-04-04", 400, 500, 600],
    ["2021-04-05", 500, 600, 700],
  ];
  const options = {
    title: "육계저울 데이터",
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

export default ScaleChart;
