/**
* NAME: convertWeiToBalance
* PARAMS: strValue, iDecimal
* Convert value from wei value to format value
*/
export const convertWeiToBalance = (strValue, iDecimal = 18) => {
  return parseInt(strValue) / Math.pow(10, iDecimal)
}

/**
* NAME: convertBalanceToWei
* PARAMS: strValue, iDecimal
* Convert value from balance value to wei value
*/
export const convertBalanceToWei = (strValue, iDecimal = 18) => {
  return strValue * Math.pow(10, iDecimal)
}

/**
* NAME: formatNumber
* PARAMS: strNumber, isFiatMoney
* RULE Format Number of HB Wallet:
* - FiatMoney : 2 decimal
* - CryptoMoney: Base on number decimal (maximum 8 decimal)
*/
// export const formatNumber = (strNumber, isFiatMoney) => {
//   let stringNumber = String(strNumber)
//   let dotsCount = countDots(stringNumber, '\\.')
//   let precision = null
//   if (dotsCount === 1) {
//     let decimalCount = stringNumber.length - stringNumber.indexOf('.') - 1
//     decimalCount = decimalCount <= 2 ? 2 : decimalCount
//     precision = decimalCount > 8 ? 8 : decimalCount
//   } else {
//     precision = 2
//   }
//   let value = I18n.toNumber(stringNumber,
//     {separator: '.', precision: isFiatMoney ? 2 : precision, delimiter: ','})
//   return value
// }
