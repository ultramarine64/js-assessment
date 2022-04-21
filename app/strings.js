exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let newStr = '';

    let currentSymbol = '';
    let currentAmount = 0;

    for (let i = 0; i < str.length; i++) {
      if (currentSymbol === str[i]) {
        currentAmount++;
      }
      else {
        currentSymbol = str[i];
        currentAmount = 1;
      }

      if (currentAmount <= amount) {
        newStr = newStr + str[i];
      }
    }

    return newStr;
  },

  wordWrap: function(str, cols) {
    let wordsArray = str.split(' ');
    let newStr = wordsArray[0];

    for (let i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length >= cols) {
        newStr += '\n' + wordsArray[i];
      }
      else {
        if (newStr.length + wordsArray[i].length > cols) {
          newStr += '\n' + wordsArray[i];
        }
        else {
          newStr += ' ' + wordsArray[i];
        }
      }
    }

    return newStr;
  },

  reverseString: function(str) {
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr = reversedStr + str[i];
    }

    return reversedStr;
  }
};
