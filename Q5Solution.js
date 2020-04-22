// How do you find the largest and smallest number in an unsorted integer array?
const numbers = [1, 3, 5, 12, 4, 2, 7, 33];

let sorted = numbers.slice().sort(function (a, b) {
  return a - b;
});

let smallest = sorted[0], largest = sorted[sorted.length - 1];

console.log(smallest);
console.log(largest);
