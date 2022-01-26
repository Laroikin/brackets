module.exports = function check(str, bracketsConfig) {
  bracketsConfig = [].concat(...bracketsConfig);

  let stack = [],
    swap;

  for (let smth of str) {
    swap = closedBracket(smth, bracketsConfig);

    if (swap != 0 && stack[stack.length - 1] != smth) {
      stack.push(swap);
    } else if (stack.pop() != smth) {
      return false;
    }
  }
  return stack.length == 0 ? true : false;
};

function closedBracket(char, a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == char && i + 1 < a.length) return a[i + 1];
  }
  return 0;
}

// console.log(check('()', [['(', ')']]));
