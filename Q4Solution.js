// How do you remove duplicate numbers from an array?
const array = [1, 2, 3, 3, 3, 4, 5, 5, 6];

let duplicates = [...new Set(array)];

console.log(duplicates);
