exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    function cancel() {
      clearTimeout(timerId)
    }

    let timerId;
    function setTimer() {
      console.log(start++);
      if (start <= end) {
        timerId = setTimeout(setTimer, 100);
      }
    }
    setTimer();

    return {
      cancel
    };
  }
};
