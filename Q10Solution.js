// 10: How do you print the first non-repeated character from a string?
const firstNonRepeatedCharacter = function (string) {
  let chars = string.split("");
  for (var i = 0; i < string.length; i++) {
    if (
      chars.filter(function (j) {
        return j == string.charAt(i);
      }).length == 1
    )
      return string.charAt(i);
  }
};

console.log(firstNonRepeatedCharacter("aabbcddd"));
