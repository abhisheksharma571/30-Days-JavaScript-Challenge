//Task - 03: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
function matchWords(str){
    const regex = /\b[A-Z][a-zA-Z]*\b/g;
    return str.match(regex);
}

const inputString = "JavaScript is a programming language. Many developers use JavaScript.";
console.log(matchWords(inputString));

//\b asserts a word boundary.
//[A-Z] matches any uppercase letter.
//[a-zA-Z]* matches zero or more uppercase or lowercase letters.

//Task - 04: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

function matchDigitSequence(str){
    const regex = /\d+/g;
    return str.match(regex);
}

const inputString2 = "There are 123 apples, 45 bananas, and 455 cherries."
console.log(matchDigitSequence(inputString2));

////+ means one or more occurrences of the preceding token (in this case, digits).