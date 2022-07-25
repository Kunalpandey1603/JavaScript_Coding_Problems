
// // problem 1
function doReverse(p1) {
  return p1.split("").reverse().join("");
}

function someFunction(p1, p2, p3) {
  p1 = doReverse(p1);
  p2 = ["1", "2", "3"];
  p3.push("9999");
}

let a = "xyz";
let b = ["123", "567"];
let c = ["abc", "def"];

someFunction(a, b, c);

console.log(a);
console.log(b);
console.log(c);

// Solution of problem - 1


/* Variable a:
So in someFunction when p1 is changed it does not affect a variable as we just passed the value to p1
 not the actual reference to a.

Variable b:
In someFunction, we passed the reference of b to p2 and when p2 is assigned a new array, 
it is removing the reference for b and created new reference for value ['1','2','3'] and assigned that to p2. 
Hence b is unchanged.

Variable c:
In someFunction, we passed the reference of c to p3 and when we push new items to p3 we are adding the new item to the same reference. Hence we are chaning both c and p3 as they both point to same memory reference.
Note: push method is a mutating method. */ 





// // problem 2
var number = 10;

var display = function () {
  console.log(number);
  var number = 20;
};

display();

/* When ever a script loads, a global execution context is created and it has 2 phases: creation and execution phase.
 Variable hoisting takes place during creation phase. It is during this phase all the varibles in the current execution
  context are declared and no value is assiged to these variables until they are executed.
So when question 2 is loaded in js runtime before it executes the script js runtime creates a global execution context
 and creates variables "number" and "display" (this is called hoisting). 
 At this point those variables are empty(undefined).
Then the script(question 2) execution starts then the following happens:
line 1: variable number is assigned with value 10.
line 3-6: variable display is assigned with function definition (skips the execution of function).
line 8: when "display" function is called, function exection context is created and before running the function 
a local number variable is created and the value is undefined. Now the execution jumps to line .
line 4: when we log number js runtime first looks for number in current execution context and prints it.
 At this point in function execution context we have a variable number but no value is assigned yet, 
 hence it prints undefined.
line 5: Here we are assiging the variable number value 2. */

// // problem 3
async function callMe() {
  console.log(1);
  await crazyFunction();
  console.log(3);
}

function crazyFunction() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(2);
    }, 1000);
  });
}

 callMe();

 /* When we await for promises and if the promise is not resolved or rejected program terminates as event loop
  doesn't know where to go next. Hence we at line 3 we jump to line 8 and after line 13
   it will not return back as there is not reject or resolve is called and event loop ends. */

// Problem 4 

// Pass-By-Reference:

let john = {
  name: "John Smith",
  age: 45,
  gender: "male",
};

let newJohn = john; 
newJohn.name= 'Kunal Pandey'
console.log("john", john);
console.log("newJohn", newJohn);

// john { name: 'Kunal Pandey', age: 45, gender: 'male' }
// newJohn { name: 'Kunal Pandey', age: 45, gender: 'male' }

// Remember when I said that instead of making a copy, a value in memory will be referenced?
// The newJohn object is NOT a copy of the object stored inside of the john variable. Instead, the variable newJohn 
// is referencing the original john object.

// That means if you decide to edit thenewJohn object
// ( e.g changing the name property of newJohn on line 3 to "Kunal Pandey"), you are in fact modifying the john object!

// As you can see in lines 16 and 19, both objects’ name property has a value of "Kunal Pandey".

// Problem 5

function crazyFunction() {
  var a1 = (b1 = 10);
}
crazyFunction();
console.log("b1", typeof b1 === "undefined"); // false
console.log("a1", typeof a1 === "undefined"); // true

// Problem 6
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

/* The for loop iterates 3 times and creates a new function log() each time. 
The log() function captures the value of the variable i during each iteration. 
Then setTimout() schedules an execution of log(). When for() cycle completes, i variable has value 3.
The 3 scheduled log() callbacks are called by setTimeout().
 log() reads the current value of variable i, which is 3 and logs as 3. */