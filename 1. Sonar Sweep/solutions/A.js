const solveA = depths => {
  let incrementCount = 0;

  for (let depthIndex = 1; depthIndex < depths.length; depthIndex += 1) {
    const previousDepth = depths[depthIndex - 1],
      currentDepth = depths[depthIndex];

    if (previousDepth < currentDepth) incrementCount += 1;
  }

  return incrementCount;
};

module.exports = solveA;
