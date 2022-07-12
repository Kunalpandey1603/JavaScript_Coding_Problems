// Problem - Reverse a given string.

// Way 1
let test = 'testing';
const reverse = test.split('').reverse().join('');
console.log(reverse); // gnitset


// Way 2 - using for loop

let output = '';
console.log("test.length", test.length);
for(let i=0;i<test.length;i++) {
    output+=test[test.length - i -1]
}

console.log(output)