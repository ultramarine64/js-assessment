exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    exports.name = str2;
    exports.greeting = str1;
    exports.sayIt = function() {
      return `${exports.greeting}, ${exports.name}`
    };

    return exports;
  }
};
