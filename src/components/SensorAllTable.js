const SensorAllTable = ({ data }) => {
  console.log("===data===\n", data);
  const dData = data.shift();
  console.log("===dData===\n", dData);
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
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
                <td>{item[8]}</td>
                <td>{item[9]}</td>
                <td>{item[10]}</td>
                <td>{item[11]}</td>
                <td>{item[12]}</td>
                <td>{item[13]}</td>
                <td>{item[14]}</td>
                <td>{item[15]}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default SensorAllTable;
