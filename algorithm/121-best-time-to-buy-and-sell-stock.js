/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let maxProfit = 0
   let minPrice = Infinity
   
   prices.map(price => {
     if (price < minPrice) {
      minPrice = price
     } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
     }
   })

   return maxProfit
};