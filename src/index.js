function check(str, bracketsConfig) {
  const stack = [];

  for (const bracket of str) {
    const config = bracketsConfig.filter((config) =>
      config.includes(bracket)
    )[0];

    if (bracket === config[1] && stack[stack.length - 1] === config[0]) {
      stack.pop();
    } else if (bracket === config[0]) {
      stack.push(bracket);
    } else {
      return false;
    }
  }

  return !(stack.length > 0);
}

module.exports = check;
