/******************
 * YOUR CODE HERE *
 ******************/

function onlyVowels(str) {
let output = '';
for (const char of str) {
  const lowerCaseChar = char.toLowerCase();
  if (
  lowerCaseChar === 'a' || 
      lowerCaseChar === 'e' ||
      lowerCaseChar === 'i' ||
      lowerCaseChar === 'o' ||
      lowerCaseChar === 'u' 
  ) {
    output += char;
    }
  }
  return output;
}

function crazyCase(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {//for of loop syntax
    const char = str[i];
    if (i % 2 === 0) {
     output += char.toLowerCase(); // [i] could be placed here too at char
  }
  else {
    output += char.toUppercase();// [i] could be placed here too at char
  }
}
  return output;
}

function titleCase(str) {
  let output = '';
  let capitalizeFollowingLetter = true;
  for (const char of str) {
    // Ask yourself if it should be capitalized
    if (capitalizeFollowingLetter) {
      output += char.toUpperCase();
    }
    // Ask yourself if it should be lower cased 
    else {
      output+= char.toLowerCase();
    }
    // code down below determines if the letter will be capitalized or not
    if (char === ' ') {
      capitalizeFollowingLetter = true;
    } else {
      capitalizeFollowingLetter = false;
    }
    // simplification of above if statement:
    // capitalizeFollowingLetter = char === ' ';
  }
    return output;
}

  function camelCase(str) {
    let output = '';
    let capitalizeFollowingLetter = true;
    for (const char of str) {

      //To do:
      // add char to output str unless it's a space
      if (char !== ' ') {
        //add to output
        //output += char;
        if (capitalizeFollowingLetter) {
          output += char.toUpperCase();
        } else { 
          output += char.toLowerCase();
        }
      }
      //To do;
      // If the char is a space, capitalize following letter
      // Otherwise lowercase the following letter
      // Simplification: change to 'else' statement

      if (char === ' ') {
        capitalizeFollowingLetter = true;
      } else {
        capitalizeFollowingLetter = false;
      }
    }
  return output;
  }

  function crazyCase2ReturnOfCrazyCase(str) {
    let output = '';
    let capitalizeFollowingLetter = false;
    for (const char of str) {
// add current char to output strong, capitalize or lowercase as appropriate
      if (capitalizeFollowingLetter) {
        output += char.toUpperCase();
      } else {
        output += char.toLowerCase();
      }
      // toggle the 'capitalizeFollowingLetter'
      if (char !== ' ') {
        capitalizeFollowingLetter = !capitalizeFollowingLetter;
      }
    }
    return output;
  }

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
