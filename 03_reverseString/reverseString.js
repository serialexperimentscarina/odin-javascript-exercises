const reverseString = function (string) {
  let finalString = "";
  let len = string.length;

  for (let i = 1; i <= len; i++) finalString += string.charAt(len - i);
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
