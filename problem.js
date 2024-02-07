//frist problem solving now started
/*
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return '“Invalid Number”';
  }
  const ticketPrice = 120;
  const strape = 50 * 8;
  const watchMane = 500;

  const ticketRemining = ticketPrice * ticketSale;
  const loseMoney = strape + watchMane;

  const tottelTcketPrice = ticketRemining - loseMoney;
  return tottelTcketPrice;
}
*/

//second problem in javascript stat now

/*
function checkName(name) {
  if (typeof name !== 'string') {
    return 'invalid';
  }
  let word = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
  const lastLatter = name[name.length - 1].toLowerCase();
  for (const num of lastLatter)
    if (word.includes(num)) {
      return 'Good Name';
    } else {
      return 'Bad Name';
    }
}
*/

//thride problem solving state

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return 'Invalid Array';
  }
  let number = [];
  for (const num of array) {
    if (typeof num === 'number' && !isNaN(num)) {
      number.push(num);
    } else if (typeof num !== 'number') {
      delete num;
    }
  }
  return number;
}

console.log(deleteInvalids([1, 2, 3]));
