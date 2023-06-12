import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import classes from "../css/Main.module.css";
import { useRef } from "react";

const ScaleTable = ({ data }) => {
  const ref = useRef();
  // const data = [
  //   ["Date", "총 저울 측정값", "AI 분석 마릿수", "마리당 무게"],
  //   ["2021-04-01", 100, 200, 300],
  //   ["2021-04-02", 200, 300, 400],
  //   ["2021-04-03", 300, 400, 500],
  //   ["2021-04-04", 400, 500, 600],
  //   ["2021-04-05", 500, 600, 700],
  // ];
  const options = {
    title: "육계저울 데이터",
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
    { label: "총 저울 측정값", key: "totalScale" },
    { label: "AI 분석 마릿수", key: "aiScale" },
    { label: "마리당 무게", key: "scalePerAnimal" },
  ];

  const csvData = data.map(([date, totalScale, aiScale, scalePerAnimal]) => ({
    date,
    totalScale,
    aiScale,
    scalePerAnimal,
  }));

  const onClickPrint = () => {
    handlePrint();
  };

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "육계저울 데이터",
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
            filename={"육계저울_CSV_데이터"}
          >
            <button className={classes.tableHeader__btn}>CSV 다운로드</button>
          </CSVLink>
        </div>
      </div>
      <Chart ref={ref} chartType="Table" data={data} options={options} />
    </div>
  );
};

export default ScaleTable;
