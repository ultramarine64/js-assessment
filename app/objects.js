exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    let alterSayIt = fn.bind(obj);

    return alterSayIt();
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let objKeys = Object.keys(obj);
    let objPropsArr = [];

    for (let objKey of objKeys) {
      objPropsArr.push(`${objKey}: ${obj[objKey]}`);
    }

    return objPropsArr;
  }
};
