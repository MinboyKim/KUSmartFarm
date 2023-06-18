const TestTable = ({ data }) => {
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
        <tr>
          <td>2021-09-01</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
        </tr>
      </table>
    </div>
  );
};

export default TestTable;
