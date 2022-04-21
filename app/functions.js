exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    let newFn = fn.bind(obj);
    return newFn();
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    let fnArr = [];
    for (let item of arr) {
      fnArr.push(() => fn(item));
    }
    return fnArr;
  },

  partial: function(fn, str1, str2) {
    function partialApply(punctuation) {
      let bindedFn = fn.bind(null, str1, str2, punctuation);
      return bindedFn();
    }
    return partialApply;
  },

  useArguments: function() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    let restArguments = [];

    for (let i = 1; i < arguments.length; i++) {
      restArguments.push(arguments[i]);
    }

    return fn(...restArguments);
  },

  partialUsingArguments: function(fn) {
    let partialFn;

    switch (arguments.length) {
      case 1:
        partialFn = (a, b, c) => fn(a, b, c);
        break;
      case 2:
        partialFn = (a, b) => fn(arguments[1], a, b);
        break;
      case 3:
        partialFn = (a) => fn(arguments[1], arguments[2], a);
        break;
      case 4:
        partialFn = () => fn(arguments[1], arguments[2], arguments[3]);
        break;
    }

    return partialFn;
  },

  curryIt: function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return fn(x, y, z);
        }
      }
    }
  }
};
