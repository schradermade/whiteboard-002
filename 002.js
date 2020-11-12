/*
Prompt 1: 
Write a method that takes in a string and counts each instance of each letter in the string. 
It should return an array of integers, where each integer represents the number of occurrences of a letter. 
The array should start with the number of as, and end with number of zs (i.e. if the array is called letters, 
then letters[0] should represent the number of as, and letters[25] should represent the number of zs).

Example:

Given: "As you know, Morty, I've got a lot of enemies in the universe that consider my genius a threat"
Return: [ 5, 0, 1, 1, 10, 1, 2, 3, 6, 0, 1, 1, 3, 6, 7, 0, 0, 4, 5, 8, 3, 2, 1, 0, 3, 0 ]

Questions for Interviewer:

1. string data type for values
2. count number of times the letter occurs
3. method to return an array
4. 


// Steps //
1. Need to take in a string
2. Need to identify what letter is in the first index-position
3. need to add "count += 1" to the count of that particular letter
4. Need to push final count to output array.
5. need to return final output array once entire string is indexed.




//Pseudo Code//

alphString "I love when the sun shines in July";
alphArray = a, b, c, d, .....etc
count = 0

Example: "a"

ALL THE LOOPS IN MY ARRAY:
  1.take in alphArray[0] - compare to - alphString[0]
    Is "I" equal to "a"
      if True: I want to add 1 to my counter variable.
      if False: keep iterating through alphString

  2.take in alphArray[0] - compare to - alphString[1]
    Is "I" equal to "a"
      if True: I want to add 1 to my counter variable.
      if False: keep iterating through alphString

    3.take in alphArray[0] - compare to - alphString[2]
    Is "I" equal to "a"
      if True: I want to add 1 to my counter variable.
      if False: keep iterating through alphString
      



I need to loop through alphArray ENTIRELY for each letter, before I move on to the next letter..."b"
*/

// WORKING SOLUTION //

let alphString = "I love when the sun shines in July";
const alphArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let outputString = [];

function countLetter(alphString, alphArray)  {
let count = 0

  for ( let i=0; i < alphArray.length; i++)  {
    for ( let j=0; j < alphString.length; j++ )  {
      if ( alphArray[i] == alphString[j].toLowerCase() )  {
        count++;
      };
    }
    outputString.push(count);
    count = 0
  }
  return outputString;
};