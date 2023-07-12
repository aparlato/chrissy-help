const array = [
  8.31, 19.42, 7.01, 7.02, 7.03, 93.43, 55.55, 54.34, 32.33, 44.32, 1.0, 5.54,
  6.54, 6.66,
];

const actualSum = Number(array.reduce((acc, n) => acc + n, 0).toFixed(2));

const desiredSum = Number((actualSum - 6.54).toFixed(2));

const powerset = arr =>
  arr.reduce((acc, v) => acc.concat(acc.map(r => [v].concat(r))), [[]]);

const getOutliers = arr => {
  const markedArr = arr.map((n, i) => ({ value: n, id: i }));

  const allCombos = powerset(markedArr);

  const possibleCombos = allCombos.filter(nums => {
    const numArr = nums.map(v => v.value);
    const sum = Number(numArr.reduce((acc, n) => acc + n, 0).toFixed(2));

    return sum === desiredSum;
  });

  const output = [];

  for (const possibleCombo of possibleCombos) {
    const outliers = markedArr.filter(v => {
      const { id } = v;
      return !possibleCombo.some(c => c.id === id);
    });

    output.push({
      combo: possibleCombo.map(v => v.value),
      outliers: outliers.map(v => v.value),
    });
  }

  return output;
};

const results = getOutliers(array, desiredSum);

console.log(results);
