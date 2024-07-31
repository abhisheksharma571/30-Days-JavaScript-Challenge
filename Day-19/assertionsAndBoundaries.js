// Task - 07: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
function matchWordAtBeginning(str) {
    const regex = /^\w+/;
    const matches = str.match(regex);
    return matches;
}
  
const inputString = "Hello, this is a test string.";
const matches = matchWordAtBeginning(inputString);
console.log("Matches for word at the beginning of the string:", matches);
  
//^ asserts the position at the start of the string.
//\w+ matches one or more word characters (letters, digits, or underscores).

//Task - 08: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
function matchWordAtEnd(str) {
    const regex = /\w+$/;
    const matches = str.match(regex);
    return matches;
}
  

const inputString2 = "This is another test string. Goodbye";
const matches2 = matchWordAtEnd(inputString2);
console.log("Matches for word at the end of the string:", matches2);
//$ asserts the position at the end of the string.
  