import { Chart } from "react-google-charts";
import Sensor from "../pages/Sensor";
import { useState, useEffect } from "react";

const SensorChart = ({ data }) => {
    // useEffect(() => {
    //     const chartContainer = document.getElementById('chart-container');
    //     const chartElement = chartContainer.getElementsByTagName('div')[0];
        
    //     if (chartElement.scrollWidth > chartContainer.offsetWidth) {
    //       chartContainer.style.overflowX = 'scroll';
    //     }
    //   }, []);

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
    <div id="chart-container" style={{ width: '100%', height: '500px' }}>
      <Chart chartType="LineChart" data={data} options={options} />
    </div>
  );
};

export default SensorChart;
