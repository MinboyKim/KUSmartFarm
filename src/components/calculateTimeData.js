
function calculateTimedata(data) {
    const groups = {};
  
    for (const obj of data) {
      const { WRT_DATE, WRT_TIME } = obj;
      if (!groups[WRT_DATE]) {
        groups[WRT_DATE] = {
          timeData: {}, // 새로운 timeData 객체 추가
        };
      }
  
      const hour = parseInt(WRT_TIME.substr(0, 2), 10); // 앞 두 자리를 추출하여 시간으로 변환
  
      // 시간대별 데이터를 timeData에 저장
      if (!groups[WRT_DATE].timeData[hour]) {
        groups[WRT_DATE].timeData[hour] = {
          CO2: [],
          NH3: [],
          HUMT: [],
          TEMP: [],
          H2S: [],
        };
      }
  
      groups[WRT_DATE].timeData[hour].CO2.push(+obj.CO2_DATA.toFixed(2));
      groups[WRT_DATE].timeData[hour].H2S.push(+obj.H2S_DATA.toFixed(2));
      groups[WRT_DATE].timeData[hour].NH3.push(+obj.NH3_DATA.toFixed(2));
      groups[WRT_DATE].timeData[hour].HUMT.push(+obj.HUMT_DATA.toFixed(2));
      groups[WRT_DATE].timeData[hour].TEMP.push(+obj.TEMP_DATA.toFixed(2));
    }

    for (const key in groups) {
        const group = groups[key];
        const { timeData } = group;
      
        for (const hour in timeData) {
          const data = timeData[hour];
          const { CO2, H2S, NH3, HUMT, TEMP } = data;
      
          const avgCO2 = +(CO2.reduce((sum, value) => sum + value, 0) / CO2.length).toFixed(2);
          const avgH2S = +(H2S.reduce((sum, value) => sum + value, 0) / H2S.length).toFixed(2);
          const avgNH3 = +(NH3.reduce((sum, value) => sum + value, 0) / NH3.length).toFixed(2);
          const avgHUMT = +(HUMT.reduce((sum, value) => sum + value, 0) / HUMT.length).toFixed(2);
          const avgTEMP = +(TEMP.reduce((sum, value) => sum + value, 0) / TEMP.length).toFixed(2);
      
          timeData[hour] = {
            CO2: avgCO2,
            H2S: avgH2S,
            NH3: avgNH3,
            HUMT: avgHUMT,
            TEMP: avgTEMP,
          };
        }
      }
  
  
      const timeData = [];
      for (const key in groups) {
        const group = groups[key];
        timeData[key] = group.timeData;
      }
    
      return timeData;
  }
  
  export default calculateTimedata;