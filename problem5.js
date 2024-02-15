function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== 'Number') {
    return 'invalid input';
  }
  let sum = 0;
  let tottelvlau = 0;
  for (const num of arr) {
    tottelvlau = tottelvlau + num;
    if (num >= 3000) {
      sum = num * 0.2;
    }
  }
  const totleCost = tottelvlau - sum;
  const saving = totleCost - livingCost;
  if (saving < 0) {
    return 'earn more';
  }

  return saving;
}
console.log(monthlySavings([1000, 2000, 3000], 'Number'));
