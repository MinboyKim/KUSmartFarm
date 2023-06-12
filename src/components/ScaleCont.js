import Card from "./Card";
import ScaleChart from "./ScaleChart";
import ScaleTable from "./ScaleTable";
import classes from "../css/Main.module.css";
import { useState } from "react";
import axios from "axios";

const ScaleCont = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  async function handleClick(sd, ed) {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/data2", {
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
      groups[WRT_DATE].sumTOTAL_SCALE += obj.TOTAL_SCALE;
      groups[WRT_DATE].sumAI_SCALE += obj.AI_SCALE;
      groups[WRT_DATE].sumSCALE_PER_ANIMAL += obj.SCALE_PER_ANIMAL;
    }

    const averages = [];
    for (const key in groups) {
      const group = groups[key];
      const { count } = group;

      averages.push({
        WRT_DATE: key,
        TOTAL_SCALE: group.sumTOTAL_SCALE / count,
        AI_SCALE: group.sumAI_SCALE / count,
        SCALE_PER_ANIMAL: group.sumSCALE_PER_ANIMAL / count,
      });
    }

    return averages;
  }

  return (
    <div>
      <Card>
        <div className={classes.dateWrapper}>
          <div>
            <button className={classes.btn}>1개월</button>
            <button className={classes.btn}>지난달</button>
            <button
              className={classes.btn}
              onClick={handleButtonClick}
            ></button>
            {calenderVisibility && (
              <div
                style={{
                  position: "absolute",
                }}
              >
                <div className={classes.Calendar}>
                  <Calendar />
                </div>
              </div>
            )}
          </div>
          <button>조회</button>
        </div>
      </Card>
      <Card>
        <div className={classes.graphWrapper}>
          <div className={classes.graphWrapper__header}>
            <h4>조회 날짜</h4>
            <span>2023-03-20 ~ 2023-04-20</span>
          </div>
          {isLoading ? "Loading..." : <ScaleChart data={chartData} />}
        </div>
      </Card>
      <div className={classes.show}>
        <button className={classes.btn}>전체 센서 조회</button>
        <button className={classes.btn}>시간대별 조회</button>
      </div>
      <Card>
        <div className={classes.tableWrapper}>
          {isLoading ? "Loading..." : <ScaleTable data={chartData} />}
        </div>
      </Card>
    </div>
  );
};

export default ScaleCont;
