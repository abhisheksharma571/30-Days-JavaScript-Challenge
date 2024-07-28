//Task - 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    } else {  //take the last character and add it to the reverse of the rest of the string
        return str[str.length - 1] + reverseString(str.slice(0, -1));
    }
}

console.log(`Reverse of 'hello' is: '${reverseString('hello')}'`);  // 'olleh'
console.log(`Reverse of 'world' is: '${reverseString('world')}'`);  // 'dlrow'
console.log(`Reverse of 'JavaScript' is: '${reverseString('JavaScript')}'`);  // 'tpircSavaJ'
console.log(`Reverse of 'a' is: '${reverseString('a')}'`);  // 'a'
console.log(`Reverse of '' is: '${reverseString('')}'`);  // ''

//Task - 6: Write a a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

console.log(`Is 'racecar' a palindrome? ${isPalindrome('racecar')}`);  // true
console.log(`Is 'hello' a palindrome? ${isPalindrome('hello')}`);      // false
console.log(`Is 'madam' a palindrome? ${isPalindrome('madam')}`);      // true
console.log(`Is 'level' a palindrome? ${isPalindrome('level')}`);      // true
console.log(`Is 'a' a palindrome? ${isPalindrome('a')}`);              // true
console.log(`Is '' a palindrome? ${isPalindrome('')}`);                // true