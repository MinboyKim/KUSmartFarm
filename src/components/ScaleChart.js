import { Chart } from "react-google-charts";
import React, { useEffect, useRef } from "react";
const ScaleChart = ({ data }) => {
  const options = {
    title: "육계저울 데이터",
    curveType: "function",
    colors: ["gray", "red", "blue", "orange", "green"],
    titleTextStyle: {
      fontSize: 20,
    },
    //legend: { position: "bottom" },
    width: "100%",
    height: "100%",
    chartArea: {
      height: "80%", // 차트 영역의 높이 설정
    },
  };

  return (
    <div style={{overflowX: "auto"}}>
      <Chart chartType="Line" data={data} options={options} />
    </div>
  );
};

export default ScaleChart;
