const getMinsMaxes = measurements => {
  let frequencyMap = {};

  for (const measurement of measurements) {
    for (let measurementBitIndex = 0; measurementBitIndex < measurement.length; measurementBitIndex += 1) {
      const measurementBit = +measurement[measurementBitIndex];

      if (frequencyMap[measurementBitIndex] === undefined) frequencyMap[measurementBitIndex] = {};

      frequencyMap[measurementBitIndex][measurementBit] = (frequencyMap[measurementBitIndex][measurementBit] ?? 1) + 1;
    }
  }

  const mins = [],
    maxes = [];

  for (const frequency of Object.values(frequencyMap)) {
    if (frequency['0'] === frequency['1']) {
      maxes.push(null);
      mins.push(null);
    } else if (frequency['0'] > frequency['1']) {
      maxes.push('0');
      mins.push('1');
    } else {
      maxes.push('1');
      mins.push('0');
    }
  }

  return { min: mins, max: maxes };
};

const solveB = measurements => {
  let oxygen = [...measurements],
    CO2 = [...measurements];

  let bitIndex = 0;

  while (oxygen.length > 1) {
    const { max } = getMinsMaxes(oxygen);

    oxygen = oxygen.filter(measurement => (max[bitIndex] === null ? measurement[bitIndex] === '1' : measurement[bitIndex] === max[bitIndex]));

    bitIndex += 1;
  }

  bitIndex = 0;

  while (CO2.length > 1) {
    const { min } = getMinsMaxes(CO2);

    CO2 = CO2.filter(measurement => (min[bitIndex] === null ? measurement[bitIndex] === '0' : measurement[bitIndex] === min[bitIndex]));

    bitIndex += 1;
  }

  return parseInt(oxygen[0], 2) * parseInt(CO2[0], 2);
};

module.exports = solveB;
