const removeFromArray = function (...args) {
  const argsLen = args.length;

  for (let i = 1; i < argsLen; i++) {
    let element = args[i];
    if (args[0].includes(element)) {
      args[0].splice(args[0].indexOf(element), 1);
    }
  }
  return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
