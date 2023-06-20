function calculateScaleData(data) {
    const groups = {};

    for (const obj of data) {
      const { WRT_DATE } = obj;
      if (!groups[WRT_DATE]) {
        groups[WRT_DATE] = {
          count: 0,
          sumTOTAL_SCALE: 0,
          sumAI_SCALE: 0,
          sumSCALE_PER_ANIMAL: 0,
        };
      }

      groups[WRT_DATE].count++;
      groups[WRT_DATE].sumTOTAL_SCALE += +obj.SCALE_DATA.toFixed(3);
      groups[WRT_DATE].sumAI_SCALE += +obj.COUNT_DATA.toFixed(3);
      groups[WRT_DATE].sumSCALE_PER_ANIMAL += +obj.WEIGHT_DATA.toFixed(3);
    }

    const averages = [];
    for (const key in groups) {
      const group = groups[key];
      const { count } = group;

      averages.push({
        WRT_DATE: key,
        AVG_SCALE: +(group.sumTOTAL_SCALE / count).toFixed(3),
        COUNT: +group.count,
        SCALE_PER_ANIMAL: +(group.sumSCALE_PER_ANIMAL / count).toFixed(3),
      });
    }

    return averages;
  }

  export default calculateScaleData;