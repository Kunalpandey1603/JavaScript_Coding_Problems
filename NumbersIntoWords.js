const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function convertIntegerToText(num) {
  if (num < 20) 
    return ONES[num] ?? TEENS[num - 10];
  
  if (num < 100)
    return `${TENS[Math.floor(num / 10)]} ${convertIntegerToText(num % 10)}`;
  
  if (num < 1000)
    return `${ONES[Math.floor(num / 100)]} hundred ${convertIntegerToText(num % 100)}`;
  
  throw new Error("Number too high");
}

console.log(convertIntegerToText(19))