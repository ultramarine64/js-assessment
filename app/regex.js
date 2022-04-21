exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let pattern = /\d/;

    return pattern.test(str);
  },

  containsRepeatingLetter: function(str) {
    let pattern = /([a-z])\1+/gi;

    return pattern.test(str);
  },

  endsWithVowel: function(str) {
    let pattern = /[aeiou]$/i

    return pattern.test(str);
  },

  captureThreeNumbers: function(str) {
    let threeNumbers = str.match(/\d{3}/);

    return threeNumbers ? threeNumbers[0] : false;
  },

  matchesPattern: function(str) {
    let pattern = /\b\d{3}\b\-\b\d{3}\b\-\b\d{4}\b/;

    return pattern.test(str);
  },

  isUSD: function(str) {
    let pattern = /^\$\d{1,3}(((,\d{3})*(\.\d{2}))$|(,\d{3})*$)/;

    return pattern.test(str);
  }
};
