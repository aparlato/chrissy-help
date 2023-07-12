const powerset = arr =>
  arr.reduce((acc, v) => acc.concat(acc.map(r => [v].concat(r))), [[]]);

const getOutliers = (arr, desiredSum) => {
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

export { getOutliers };
