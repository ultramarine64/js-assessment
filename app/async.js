exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let promise = new Promise(function(resolve) {
      resolve(value);
    });

    return promise;
  },

  manipulateRemoteData: function(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data.people)
      .then(peopleObjects => peopleObjects.map(object => object.name))
      .then(peopleNames => peopleNames.sort())
  }
};
