import React from "react";

function calculateAlldata(data) {
  const groups = {};

  for (const obj of data) {
    const { WRT_DATE } = obj;
    if (!groups[WRT_DATE]) {
      groups[WRT_DATE] = {
        count: 0,
        minTEMP: 10000,
        maxTEMP: 0,
        sumTEMP: 0,
        minHUMT: 10000,
        maxHUMT: 0,
        sumHUMT: 0,
        minCO2: 10000,
        maxCO2: 0,
        sumCO2: 0,
        minNH3: 10000,
        maxNH3: 0,
        sumNH3: 0,
        minH2S: 10000,
        maxH2S: 0,
        sumH2S: 0,
      };
    }

    groups[WRT_DATE].count++;
    groups[WRT_DATE].minCO2 = Math.min(
      groups[WRT_DATE].minCO2,
      +obj.CO2_DATA.toFixed(2)
    );
    groups[WRT_DATE].maxCO2 = Math.max(
      groups[WRT_DATE].maxCO2,
      +obj.CO2_DATA.toFixed(2)
    );
    groups[WRT_DATE].sumCO2 += +obj.CO2_DATA.toFixed(2);

    groups[WRT_DATE].minH2S = Math.min(
      groups[WRT_DATE].minH2S,
      +obj.H2S_DATA.toFixed(2)
    );
    groups[WRT_DATE].maxH2S = Math.max(
      groups[WRT_DATE].maxH2S,
      +obj.H2S_DATA.toFixed(2)
    );
    groups[WRT_DATE].sumH2S += +obj.H2S_DATA.toFixed(2);

    groups[WRT_DATE].minNH3 = Math.min(
      groups[WRT_DATE].minNH3,
      +obj.NH3_DATA.toFixed(2)
    );
    groups[WRT_DATE].maxNH3 = Math.max(
      groups[WRT_DATE].maxNH3,
      +obj.NH3_DATA.toFixed(2)
    );
    groups[WRT_DATE].sumNH3 += +obj.NH3_DATA.toFixed(2);

    groups[WRT_DATE].minHUMT = Math.min(
      groups[WRT_DATE].minHUMT,
      +obj.HUMT_DATA.toFixed(2)
    );
    groups[WRT_DATE].maxHUMT = Math.max(
      groups[WRT_DATE].maxHUMT,
      +obj.HUMT_DATA.toFixed(2)
    );
    groups[WRT_DATE].sumHUMT += +obj.HUMT_DATA.toFixed(2);

    groups[WRT_DATE].minTEMP = Math.min(
      groups[WRT_DATE].minTEMP,
      +obj.TEMP_DATA.toFixed(2)
    );
    groups[WRT_DATE].maxTEMP = Math.max(
      groups[WRT_DATE].maxTEMP,
      +obj.TEMP_DATA.toFixed(2)
    );
    groups[WRT_DATE].sumTEMP += +obj.TEMP_DATA.toFixed(2);
  }

  const averages = [];
  for (const key in groups) {
    const group = groups[key];
    const { count } = group;

    averages.push({
      WRT_DATE: key,
      MIN_TEMP: +group.minTEMP,
      MAX_TEMP: +group.maxTEMP,
      AVG_TEMP: +(group.sumTEMP / count).toFixed(2),
      MIN_HUMT: +group.minHUMT,
      MAX_HUMT: +group.maxHUMT,
      AVG_HUMT: +(group.sumHUMT / count).toFixed(2),
      MIN_CO2: +group.minCO2,
      MAX_CO2: +group.maxCO2,
      AVG_CO2: +(group.sumCO2 / count).toFixed(2), //객체 속성 key,value
      MIN_NH3: +group.minNH3,
      MAX_NH3: +group.maxNH3,
      AVG_NH3: +(group.sumNH3 / count).toFixed(2),
      MIN_H2S: +group.minH2S,
      MAX_H2S: +group.maxH2S,
      AVG_H2S: +(group.sumH2S / count).toFixed(2),
    });
  }

  return averages;
}

export default calculateAlldata;
