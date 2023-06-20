import { forwardRef } from "react";

const SensorTimeTable = forwardRef((props, ref) => {
  const allTimeArray = props.data;
  return (
    <div>
      <table ref={ref} border={1}>
        <thead
          style={{
            backgroundColor: "#21BA3B",
            color: "white",
            textAlign: "center",
          }}
        >
          <tr>
            <th colSpan={2} style={{ textAlign: "center" }}>
              시간
            </th>
            <th rowSpan={2} style={{ textAlign: "center" }}>
              온도
            </th>
            <th rowSpan={2} style={{ textAlign: "center" }}>
              습도
            </th>
            <th rowSpan={2} style={{ textAlign: "center" }}>
              이산화탄소(PPM)
            </th>
            <th rowSpan={2} style={{ textAlign: "center" }}>
              암모니아(PPM)
            </th>
            <th rowSpan={2} style={{ textAlign: "center" }}>
              황화수소(PPM)
            </th>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              일자
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              시간대별
            </td>
          </tr>
        </thead>
        <tbody>
          {allTimeArray.slice(1).map((rowData, index) => (
            <tr key={index}>
              {rowData.map((data, dataIndex) => (
                <td key={dataIndex} style={{ textAlign: "center" }}>
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default SensorTimeTable;
