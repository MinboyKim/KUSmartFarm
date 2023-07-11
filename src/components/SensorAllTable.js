import { forwardRef } from "react";

const SensorAllTable = forwardRef((props, ref) => {
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
          <th
            rowSpan={2}
            style={{
              textAlign: "center",
            }}
          >
            일자
          </th>
          <th
            colSpan={3}
            style={{
              textAlign: "center",
            }}
          >
            온도(℃)
          </th>
          <th
            colSpan={3}
            style={{
              textAlign: "center",
            }}
          >
            습도(%)
          </th>
          <th
            colSpan={3}
            style={{
              textAlign: "center",
            }}
          >
            이산화탄소(PPM)
          </th>
          <th
            colSpan={3}
            style={{
              textAlign: "center",
            }}
          >
            암모니아(PPM)
          </th>
          <th
            colSpan={3}
            style={{
              textAlign: "center",
            }}
          >
            황화수소(PPM)
          </th>
          <tr>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최저
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최고
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              평균
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최저
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최고
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              평균
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최저
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최고
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              평균
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최저
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최고
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              평균
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최저
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              최고
            </td>
            <td
              style={{
                backgroundColor: "#21BA3B",
                color: "white",
                textAlign: "center",
              }}
            >
              평균
            </td>
          </tr>
        </thead>
        {props.data &&
          props.data.map((item, index) => {
            return (
              <tr key={index}>
                {item.map((value, subIndex) => (
                  <td key={subIndex}>{value}</td>
                ))}
              </tr>
            );
          })}
      </table>
    </div>
  );
});

export default SensorAllTable;
