// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// -input is going to use two strings (2 of the following fruit1, fruit2, fruit3, fruit4)
// -output is going to be whichever string has the most characters
// -process begins by creating a function named mostFruitChar
// -pass the 2 strings for comparison into the function string1, string2
// -determine the characters in each of the strings using the .length built in method
// -compare both strings to determine which has more characters using a comparison operator (>) and conditional statement if/else
// -return string1 if more characters are present than string2 (from conditional statement if)
// -return string2 if more characters are present than string1 (from conditional statement else)

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const mostFruitChar = (string1, string2) =>{
    if (string1.length > string2.length){
        return string1
    }
    else {
        return string2
    }
}
console.log(mostFruitChar(fruit1, fruit2))
       //outcome: banana

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

console.log(mostFruitChar(fruit3, fruit4))
       //outcome: cherry


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// -input is 1 number from a possible 3 variables (temperature1, temperature2, temperature3)
// -output is if the test variable is below, at, or above boiling point of 212 degrees
// -process is to create a function named boilingPoint
// -pass the parameter of temp into the function for comparison to boiling point. **** learned by accident parameter does not need parentheses (at least in this instance)
// -determine if variable is below, at or above boiling point using comparison operator (< or >) and boiling point of 212  degrees and conditionals if/else
// -return (temperature1) 42 is below boiling point if it is below 212 using string interpolation
// -return (temperature2) 350 is above boiling point if it is above 212 using string interpolation
// -return (temperature3) 212 is at boiling point if it is equal to 212 using string interpolation

const boilingPoint = temp => {
    if (temp < 212){
        return `${temperature1} is below boiling point`;
    }
    else if (temp > 212){
        return `${temperature2} is above boiling point`;
    }
    else  {
        return `${temperature3} is at boiling point`;
    }
}


const temperature1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingPoint(temperature1))
   // output: 42 is below boiling point

const temperature2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingPoint(temperature2))
// output: 350 is above boiling point
const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPoint(temperature3))
// output: 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//-input is 2 arrays 
//-output return length of both arrays combined using .length built in method
//-process create a function combinedArrays and set parameters to combine arrays
//-return the output of the combined arrays a + b
const combinedArrays = (a,b) => {
    return a + b
}

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(combinedArrays(padres1984WorldSeriesRuns.length, padres1998WorldSeriesRuns.length))
//output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//-input is the test variable Charlie 2023
//-output is the string reversed
//-process create a function called stringReversed and set only 1 parameter to equal the number of test variables, then turn string into an array, reverse the array and join the array back into a string
//-return the string reversed using the .split built in method to create the array, .reverse to reverse the array and then use the .join built in method to join the array into a string

const stringReversed = (a) => {
    return a.split("").reverse().join("")

}

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"


console.log(stringReversed(currentCohort))
  //output" 3202 eilrahC


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// -input is the array numberOfConnections
// -output is the last index of the givenValue1 and givenValue2
// -process is to create a function named lastInstance, search numberOfConnections for the last index of givenValue1 and givenValue2 using the .lastIndexOf built in method give it a single parameter and use the function to index the given value
// -return the expected output of givenValue1 and givenValue2 respectively

const lastInstance = (a) => {
    return numberOfConnections.lastIndexOf(a)
}

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

console.log(lastInstance(givenValue1))
  //output: 7

const givenValue2 = 10
// Expected output: 8
console.log(lastInstance(givenValue2))
  //output: 8 

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// -input is 2 arrays, sanDiegoSummerTemperatures and sanDiegoWinterTemperatures 
// -output is the 2 arrays sorted from largest to smallest
// -process is too create a function named tempOrder with a parameter that equals the test variables and using the .sort and .reverse manipulators sort the test variables from largest to smallest
//-return sanDiegoSummerTemperatures and sanDiegoWinterTemperatures sorted in descending order

const tempOrder = (a) => {
    return a.sort().reverse()
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(tempOrder(sanDiegoSummerTemperatures))
  //outpu: [82, 80, 79, 77, 76, 73, 72]
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(tempOrder(sanDiegoWinterTemperatures))
  //output: [68, 67, 66, 66, 62, 59, 59]
