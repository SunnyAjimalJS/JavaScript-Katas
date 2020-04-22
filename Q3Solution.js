// How do you find duplicate numbers in an array if it contains multiple duplicates?

function findDuplicateNumbers(numberArray) {
  let object = {};
  let result = [];

  numberArray.forEach(function (item) {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });
  for (let prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  return result;
}

console.log(findDuplicateNumbers([1, 2, 3, 3, 4, 5, 5, 6, 7, 8]));
