exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    // equivalent: arr1.push(...arr2);
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    if (index >= arr.length) {
      return -1;
    }

    let newArr = [];

    for (let i = 0; i < index; i++) {
      newArr.push(arr[i]);
    }

    newArr.push(item);

    for (let i = index; i < arr.length; i++) {
      newArr.push(arr[i]);
    }

    return newArr;
  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    let uniqueArr = [];
    let duplicatesArr = [];

    function isItemInArr(item, arr) {
      let itemInArr = false;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          itemInArr = true;
        }
      }

      return itemInArr;
    }

    for (let i = 0; i < arr.length; i++) {
      if (isItemInArr(arr[i], uniqueArr)) {
        if (!isItemInArr(arr[i], duplicatesArr)) {
          duplicatesArr.push(arr[i]);
        }
      }
      else {
        uniqueArr.push(arr[i]);
      }
    }

    return duplicatesArr;
  },

  square: function(arr) {
    let squaredArr = [];

    for (let i = 0; i < arr.length; i++) {
      squaredArr[i] = arr[i] * arr[i];
    }

    return squaredArr;
  },

  findAllOccurrences: function(arr, target) {
    let targetIndexes = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        targetIndexes.push(i);
      }
    }

    return targetIndexes;
  }
};
