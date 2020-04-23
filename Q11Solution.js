// 11: How do you check if a given string is a palindrome?
function palindromeCheck(str) {
    re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr; 
  }
   
  console.log(palindromeCheck("A man, a plan, a canal. Panama"));
  console.log(palindromeCheck("Mary, Army"));
  console.log(palindromeCheck("8008, 8008"));
  console.log(palindromeCheck("8018, 8008"));