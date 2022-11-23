const solveA = measurements => {
  const measurementLength = measurements[0].length;

  const bitFrequencyMap = {};

  for (let measurementIndex = 0; measurementIndex < measurements.length; measurementIndex += 1) {
    const measurement = measurements[measurementIndex];

    for (let measurementBitIndex = 0; measurementBitIndex < measurement.length; measurementBitIndex += 1) {
      const measurementBit = measurement[measurementBitIndex];

      if (bitFrequencyMap[measurementBitIndex] === undefined) bitFrequencyMap[measurementBitIndex] = {};

      bitFrequencyMap[measurementBitIndex][measurementBit] = (bitFrequencyMap[measurementBitIndex][measurementBit] ?? 1) + 1;
    }
  }

  let gamma = '',
    epsilon = '';

  for (let bitIndex = 0; bitIndex < measurementLength; bitIndex += 1) {
    const bitFrequency = bitFrequencyMap[bitIndex];

    if (bitFrequency['0'] > bitFrequency['1']) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

module.exports = solveA;
