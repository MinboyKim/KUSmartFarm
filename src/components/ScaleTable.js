import { forwardRef } from "react";

const ScaleTable = forwardRef((props, ref) => {
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
            <th style={{ textAlign: "center" }}>날짜</th>
            <th style={{ textAlign: "center" }}>평균 무게</th>
            <th style={{ textAlign: "center" }}>데이터 개수</th>
            <th style={{ textAlign: "center" }}>목록</th>
          </tr>
        </thead>
        <tbody>
          {allTimeArray.slice(1).map((rowData, index) => (
            <tr key={index}>
              {rowData.map((data, dataIndex) => {
                if (dataIndex === rowData.length - 1) {
                  return (
                    <td key={dataIndex} style={{ textAlign: "center" }}>
                      <img src={data} alt="Image" />
                    </td>
                  );
                } else {
                  return (
                    <td key={dataIndex} style={{ textAlign: "center" }}>
                      {data}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default ScaleTable;
