// 12: How can a given string be reversed using recursion?

const reverseStringUsingRecursion = (str) => {
  return str ? reverseStringUsingRecursion(str.substr(1)) + str[0] : str;
};

console.log(reverseStringUsingRecursion("JavaScript"));
