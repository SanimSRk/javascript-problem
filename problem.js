//frist problem solving now started

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
console.log(calculateMoney(1));
