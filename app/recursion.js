exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let files = [];
    let filesData = data.files;

    if (dirName) {
      for (let file of filesData) {
        if (file instanceof Object && file.dir === dirName) {
          filesData = file.files;
          break;
        }
      }
    }

    for (let file of filesData) {
      if (file instanceof Object) {
        files.push(...this.listFiles(file));
      }
      else if (typeof file === "string") {
        files.push(file);
      }
    }

    return files;
  },

  permute: function(arr) {
    let permutedArrs = [];

    for (let i = 0; i < arr.length; i++) {
      let newArr = [arr[i]];
      let newArrPart = [...arr];
      newArrPart.splice(i, 1);
      shuffleArray(newArr, newArrPart);
    }

    function shuffleArray(newArr, arrPart) {
      if (arrPart.length === 0) {
        permutedArrs.push(newArr);
        return;
      }
      for (let i = 0; i < arrPart.length; i++) {
        let newArrClone = [...newArr];
        newArrClone.push(arrPart[i]);
        let newArrPart = [...arrPart];
        newArrPart.splice(i, 1);
        shuffleArray(newArrClone, newArrPart);
      }
    }

    return permutedArrs;
  },

  fibonacci: function(n) {
    if (n === 1 || n === 2) {
      return 1;
    }

    return (this.fibonacci(n-1) + this.fibonacci(n-2));
  },

  validParentheses: function(n) {
    let stack = [];
    let res = [];

    function backtrack(openN, closedN) {
      if (openN === n && closedN === n) {
        res.push(stack.join(''));
        return;
      }

      if (openN < n) {
        stack.push('(');
        backtrack(openN + 1, closedN);
        stack.pop();
      }

      if (closedN < openN) {
        stack.push(')');
        backtrack(openN, closedN + 1);
        stack.pop();
      }
    }

    backtrack(0, 0);

    return res;
  }
};
