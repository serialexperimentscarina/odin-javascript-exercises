const sumAll = function (int1, int2) {
  if (
    !(Number.isInteger(int1) && Number.isInteger(int2)) ||
    !(int1 >= 0 && int2 >= 0)
  )
    return "ERROR";

  const largerInt = Math.max(int1, int2);
  const smallerInt = Math.min(int1, int2);
  let sum = 0;

  for (let i = smallerInt; i <= largerInt; i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
