//Task - 01: Write a regular exression to match a simple pattern(e.g., match all occurrences of the word "JavaScriot" in a string). Log the matches.
function matchOccurence(str){
    const regex = /JavaScript/g;
    return str.match(regex);
}

const inputString = "JavaScript is a programming language. Many developers use JavaScript.";
console.log(matchOccurence(inputString));

//task - 02: Write a regular expression to match all the digits in a string. Log the matches.

function matchDigits(str){
    const regex = /\d/g;
    return str.match(regex);
}

const inputString2 = "My phone number is 123-456-7890 and zip code is 12345";
console.log(matchDigits(inputString2)); 

//\d matches any digit (0-9).
//The g flag stands for "global", which means it will find all matches in the string.