// 01 How do you find the missing numbers in a given integer array?
const arr = [1, 3, 5];
const [min, max] = [Math.min(...arr), Math.max(...arr)];
const missingNumber = Array.from(Array(max - min), (v, i) => i + min).filter(
  (i) => !arr.includes(i)
);

console.log(missingNumber);
