exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let binaryNumStr = num.toString(2);
    return +binaryNumStr[binaryNumStr.length - bit];
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let binaryNumStr = num.toString(2);

    let offset = 8 - binaryNumStr.length;
    binaryNumStr = '0'.repeat(offset) + binaryNumStr;

    return binaryNumStr;
  },

  multiply: function(a, b) {
    let aNumPrecision = (a + '').split('.')[1] ? (a + '').split('.')[1].length : 0;
    let bNumPrecision = (b + '').split('.')[1].length ? (b + '').split('.')[1].length : 0;
    let biggestPrecision = Math.max(aNumPrecision, bNumPrecision);

    return +(a * b).toFixed(biggestPrecision);
  }
};
