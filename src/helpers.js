// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
}

// Convert a number to $ format
export const convertMoney = (money) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
}

export const calcInflation = (money, years) =>{
  let rate = 0.015;
  money = Math.pow(1 + rate, years);
}