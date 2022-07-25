const person = [
  {
    name: "kunal",
    age: 25,
  },
  {
    name: "kevin",
    age: 35,
  },
  {
    name: "james",
    age: 15,
  },
  {
    name: "nathan",
    age: 33,
  },
  {
    name: "mike",
    age: 42,
  },
  {
    name: "Andre12",
    age: 89,
  },
];

// Problem 1- Find the name of all the persons of age less tha 35

// using filter & map
const output = person.filter((per) => per.age < 35).map((per) => per.name);
//console.log('output', output);

// using reduce

const reduceOutput = person.reduce((acc, curr) => {
  if (curr.age < 35) {
    acc.push(curr.name);
  }
  return acc;
}, []);

//console.log("reduceOutput", reduceOutput);

// Problem 2
// Array squared
// Square the value of every element in the array.

const input = [1, 2, 3, 4, 5];

// using Math.pow()
const arraySquared = input.map((num) => Math.pow(num, 2));

// using *
// const arraySquared = input.map((num) => num*num);

// console.log("arraySquared", arraySquared);

// Problem 3

// Calculate the mean and median values of the number elements from the input array.

const inputMeanMedian = [
  9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25,
];
const middle = inputMeanMedian.length / 2;
inputMeanMedian.sort((a, b) => a - b);
const outputMeanMedian = inputMeanMedian.reduce(
  (accumulator, currentValue) => {
    accumulator.mean += currentValue / inputMeanMedian.length;
    if (middle % 2 === 0) {
      accumulator.median =
        (inputMeanMedian[middle] + inputMeanMedian[middle - 1]) / 2;
    } else if (middle % 2 != 0) {
      accumulator.median = inputMeanMedian[Math.trunc(middle)];
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);

// console.log("outputMeanMedian", outputMeanMedian);

// Problem 4
// Get name initials
// The given input is a string of multiple words with a single space between each of them.
// Abbreviate the name and return the name initials.

const namedInput = "George Raymond Richard Martin";
const namedOutput = namedInput
  .split(" ")
  .map((name) => name[0])
  .join("");
// console.log("namedOutput", namedOutput); // GRRM

// Problem 5

// Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members,
// and return their respective ages and the age difference.

const familyMembers = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

const ages = familyMembers.map((person) => person.age);
// console.log([Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]);

// problem 6

const numeronyms = "Every developer likes to mix kubernetes and javascript";

const numeronymsOutput = numeronyms
  .split(" ")
  .map((str) => {
    if (str.length >= 4) {
      return str[0] + (str.length - 2) + str[str.length - 1];
    }
    return str;
  })
  .join(" ");

// console.log("numeronymsOutput", numeronymsOutput);

// Problem 7
// find factorial

// solution 1- without map-filter-reduce
const factInput = 6;
let test = factInput;
let fact = 1;
while (test > 0) {
  fact *= test;
  test--;
}
// console.log("fact", fact);

// solution 2 - using map and reduce

const outputFact = new Array(factInput)
  .fill(null)
  .map((currentValue, index) => index + 1)
  .reduce((accumulator, currentValue) => accumulator * currentValue);

// console.log("outputFact", outputFact);

// Problem 8

/*
Count the occurrences of distinct elements in the given 2D array. The given input is an array, 
the elements of which are arrays of strings. The result is an object whose property names 
are the values from the arrays and their value is the number of their occurrences.
      */

const countOccurance = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const flatArray = countOccurance.flat()

const occurrences = flatArray.reduce((obj, char)=>{
     if(!obj[char]) {
         obj[char]=1;
     } else {
        obj[char]++;
     }
     return obj;
}, {})

console.log("occurrences", occurrences);