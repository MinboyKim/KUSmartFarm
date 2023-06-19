const SensorTimeTable = ({ data }) => {

  return (
    <div>
      <table border={1}>
        <th colSpan={2}>시간</th>
        <th rowSpan={2}>온도</th>
        <th rowSpan={2}>습도</th>
        <th rowSpan={2}>CO2</th>
        <th rowSpan={2}>암모니아</th>
        <th rowSpan={2}>황화수소</th>
        <tr>
          <td>일자</td>
          <td>시간대별</td>
        </tr>
        <tr>
          <td rowSpan={24}>2019-01-23</td>
          <td>00 ~ 01</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
        </tr>
        <tr>
          <td>01 ~ 02</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
        </tr>
        <tr>
          <td>02 ~ 03</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
          <td>27.3</td>
        </tr>
      </table>
    </div>
  );
};

export default SensorTimeTable;
