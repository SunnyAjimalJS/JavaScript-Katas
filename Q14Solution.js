// 14: How do you swap two numbers without using a third variable?

let a = 1,
  b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a is now:", a);
console.log("b is now:", b);
