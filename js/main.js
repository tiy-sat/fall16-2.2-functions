// Main.js

var name = "jason";

// An example function
// This function should accept two numbers as arguments
//   and return the addition of the two...

// We get to name our arguments AND set the order of them
//   When defining our function we are REQUIRING these arguments
function addTwoNumbers(firstNumber, secondNumber) {
  // the argument definitions of: firstNumber and secondNumber are only
  //   available inside the scope of this function

  // The `return` keyword allows us to *output* data/results to our function
  //  calls elsewhere on the page
  return firstNumber + secondNumber;
}

// This is a method/function call where we are assigning a new variable
//   to EQUAL the output/return of that method
var resultOf5sAddition = addTwoNumbers(5, 5);
var resultOf6sAddition = addTwoNumbers(6, 6);

console.log("result of fives addition var ref", resultOf5sAddition);
console.log("result of sixes addition var ref", resultOf6sAddition);

// Would like to accept two strings as arguments
//   and return them added together
function concatTwoStrings(firstString, secondString){
  // Everything the function performs HAS TO BE
  //   inside of the curly brackets
  return firstString + secondString;
}

// Calling the method and setting the result/output to a reference
//   When setting a new variable equal to a method call
//     it is then equal to the OUTPUT of that call
var resultOfTwoStrings = concatTwoStrings("Today is...", "Tuesday");

console.log(resultOfTwoStrings);

// Accept one string as an argument
//   add a blank space at the end of the string and return it
function addPaddingToEndString(textToPad){
  // All arguments and variables are SCOPED to this function
  //   they are NOT accessible outside of the curly brackets
  var textWithPadding = textToPad + " ";
  return textWithPadding;
}

var nowPaddedString = addPaddingToEndString("iPhone");

console.log(nowPaddedString);







// "for loop"s allow us to perform an action over a set
//   increment
//   we separate our arguments with semi colons;
// For loops in JS accept 3 arguments/inputs:
//   1: Creating our iterator (ex: `var i = 0`)
//      convention is to set our iterator to zero.
//      This first statement gets ran ONLY ONCE. When the "for loop"
//      is first created in memory.
//   2: The assertion of "less than" (ex: i < 5)
//      This is ran *before* our curly bracket code-- code we want to
//      perform. If this returns TRUE... the code WILL run.
//   3: Increment/decrement action... (ex: i++)
//      This is ran at the END OF OUR CODE
for(var i = 0; i < 5; i++){
  // At first i == 0 then our code runs
  console.log("hello", i);
  // At end of the code being executed... we (i++)
}

var name = "stephanie";
console.log("the assertion", (name.length === 5));




// Chose an array because we are about to use "for loops" with this and
//   do not need the complexity of an Object... yet!
var studentsArrayOfNames = ["Lucio", "Nick", "Shaurice", "David", "Jeremy", "Justin", "Terika", "Daniel"];

var staffArrayOfNames = ["Jason", "Stephanie"];

// A good rule of thumb for increment vs decrement is did you start at 0?
//   Then use ++ (increment)
for(var i = 0; i < studentsArrayOfNames.length; i++){
  var currentName = studentsArrayOfNames[i];
  // In an "if statement"... if it returns `true`
  //   the code inside of the curly brackets WILL RUN.
  if(currentName == "Jason"){
    console.log("output iterator from array", i);
  }
}



// Array literal because we declared AND defined
var studentArrayOfNamesAgain = ["Lucoi", "Shaurice", "David", "Jeremy", "Justin", "Terika", "Daniel", "Shaurice"];

// re-defining/re-assigning the array
// Push adds an item *as the last* item of the array
studentArrayOfNamesAgain.push("Jason");
console.log("array push example", studentArrayOfNamesAgain);

// Pop removes the *last* item of the array
studentArrayOfNamesAgain.pop();
console.log("array pop example", studentArrayOfNamesAgain);

console.log("array index of example", studentArrayOfNamesAgain.indexOf("Shaurice"));

// Setting the specific index of 0
studentArrayOfNamesAgain[0] = "Lucio";
console.log("Reassign specific index example: ", studentArrayOfNamesAgain);

// Add or remove at specific index
studentArrayOfNamesAgain.splice(1, 0, "Nick");
console.log("Splice in new item example: ", studentArrayOfNamesAgain);

studentArrayOfNamesAgain.splice(8, 1, "Jason");
console.log("Splice AND delete 1 example: ", studentArrayOfNamesAgain);



// Using the keyword var not only creates a new declaration named whatever
//  follows (after the space) but SCOPES the variable to whatever scope
//  that line is.
var jasonsBag = ["Macbook", "Charger", "Lightning Cable", "Pen", "Business Cards"];

var outputSentenceOfBag = "Jason currently has: ";
// Log out the sentence "Jason currently has: item1, item2..."
for(var i = 0; i < jasonsBag.length; i++){

  // 142 and 143 are basically the same lines of code... one is more explicit.
  // outputSentenceOfBag = outputSentenceOfBag + jasonsBag[i];
  outputSentenceOfBag += jasonsBag[i];

  // If it is the last index of the array... dont add a comma
  if(i != (jasonsBag.length - 1)){
    // If this is running then it IS NOT the last item in array.
    outputSentenceOfBag += ", ";
  }else{
    // If this code is running IT IS the last item.
    outputSentenceOfBag += ".";
  }
}

console.log(outputSentenceOfBag);
