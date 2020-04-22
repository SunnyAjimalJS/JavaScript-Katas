// 09: How do you check if two strings are anagrams of each other?
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var sortStr1 = str1.split("").sort().join("");
  var sortStr2 = str2.split("").sort().join("");

  return sortStr1 === sortStr2;
}

console.log(isAnagram("dog", "god")); // true
console.log(isAnagram("car", "bar")); // false
console.log(isAnagram("true", "truuee")); // false
