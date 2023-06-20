const SensorAllTable = ({ data }) => {

  return (
    <div>
      <table border={1}>
        <th rowSpan={2}>일자</th>
        <th colSpan={3}>온도</th>
        <th colSpan={3}>습도</th>
        <th colSpan={3}>CO2</th>
        <th colSpan={3}>암모니아</th>
        <th colSpan={3}>황화수소</th>
        <tr>
          <td>최저</td>
          <td>최고</td>
          <td>평균</td>
          <td>최저</td>
          <td>최고</td>
          <td>평균</td>
          <td>최저</td>
          <td>최고</td>
          <td>평균</td>
          <td>최저</td>
          <td>최고</td>
          <td>평균</td>
          <td>최저</td>
          <td>최고</td>
          <td>평균</td>
        </tr>
        {data &&
          data.map((item, index) => {
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
};

export default SensorAllTable;
