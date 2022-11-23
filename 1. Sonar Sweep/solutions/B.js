const solveB = depths => {
  let increasingSumCount = 0;

  let previousDepthSum = depths[0] + depths[1] + depths[2];

  for (let depthIndex = 3; depthIndex < depths.length; depthIndex += 1) {
    const depthSum = depths[depthIndex - 2] + depths[depthIndex - 1] + depths[depthIndex];

    if (previousDepthSum < depthSum) increasingSumCount += 1;

    previousDepthSum = depthSum;
  }

  return increasingSumCount;
};

module.exports = solveB;
