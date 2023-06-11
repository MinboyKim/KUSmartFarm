import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import classes from "../css/Main.module.css";
import { useRef } from "react";

const ScaleTable = () => {
  const ref = useRef();
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

  const headers = [
    { label: "Date", key: "date" },
    { label: "총 저울 측정값", key: "totalScale" },
    { label: "AI 분석 마릿수", key: "aiScale" },
    { label: "마리당 무게", key: "scalePerAnimal" },
  ];

  const csvData = [
    { date: "2021-04-01", totalScale: 100, aiScale: 200, scalePerAnimal: 300 },
    { date: "2021-04-02", totalScale: 200, aiScale: 300, scalePerAnimal: 400 },
    { date: "2021-04-03", totalScale: 300, aiScale: 400, scalePerAnimal: 500 },
    { date: "2021-04-04", totalScale: 400, aiScale: 500, scalePerAnimal: 600 },
    { date: "2021-04-05", totalScale: 500, aiScale: 600, scalePerAnimal: 700 },
  ];

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
        <button onClick={onClickPrint}>인쇄</button>
        <CSVLink
          data={csvData}
          headers={headers}
          filename={"육계저울_CSV_데이터"}
        >
          다운로드
        </CSVLink>
      </div>
      <Chart ref={ref} chartType="Table" data={data} options={options} />
    </div>
  );
};

export default ScaleTable;
