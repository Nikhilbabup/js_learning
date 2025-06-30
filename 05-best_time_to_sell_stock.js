// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else {
//       maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//     }
//   }
//   return maxProfit;
// };

var maxProfit = function (prices) {
  let start = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let buy = prices[start];
    let np = prices[i] - buy;
    if (prices[start] > prices[i]) {
      start = i;
    }
    if (np > profit) {
      profit = np;
    }
  }
  return profit;
};
