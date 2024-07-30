//Task - 06: Write a function to count the occurrences of a character in a string. Log thr character counts.

function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    return charCount;
  }
  const inputString = "hello world";
  const characterCounts = countCharacterOccurrences(inputString);
  
  console.log("Character counts:");
  for (let char in characterCounts) {
    console.log(`'${char}': ${characterCounts[char]}`);
  }


  //Task - 07: Write a function to find the longest substring without repeating character in a string. Log the length of the substring.
  function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const seenChars = new Map();
    for (let end = 0; end < str.length; end++) {
      const currentChar = str[end];
      if (seenChars.has(currentChar) && seenChars.get(currentChar) >= start) {
        start = seenChars.get(currentChar) + 1;
      }
      seenChars.set(currentChar, end);
      maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
  }
  
  const inputString2 = "abcabcbb";
  const lengthOfLongestSubstring = longestSubstring(inputString2);
  
  console.log(`Length of the longest substring without repeating characters: ${lengthOfLongestSubstring}`);
  