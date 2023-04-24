// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:10
// b) Verify and explain: the .length outputs the number of characters in a string

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: [] is used to access the index address of a variable. The number within represents the index address and the output is the value of that index address. The index counts starts at 0 and counts up to the index address in square brackets. In this case, greeting is the variable which is the string "Hello World!", the [4] is calling for the output of the index address of 4, this output is "o".

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The variable index is equal to 1. Index starts at 0 and counts to the number the variable is equal to which is 1. In this case the index of the variable languages representing 1 is "Ruby" because "Javascript" represents 0 which is where the count begins.
// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"] wrong answer
// b) Verify and explain: The built in function toUpperCase only works on a string and in this case there is multiple strings but they are also inside of an array which is why in this case it does not function like a function because it expecting a single string.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//onsole.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: The .length property returns the number off characters in a string and number of strings in an array. The operator typeof returns one of the datatypes. In this case since the output of dataTypes.length is 4 this is the data type of a number since 4 is a number. 

  
