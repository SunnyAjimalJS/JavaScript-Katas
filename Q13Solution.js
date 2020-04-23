// 13. How do you check if two strings are a rotation of each other?

function checkRotationStrings(string, rotated) {
    return string.length === rotated.length && rotated.repeat(2).includes(string);
}

console.log(checkRotationStrings('apple', 'elppa')); /* false */
console.log(checkRotationStrings('apple', 'leapp')); /* true */