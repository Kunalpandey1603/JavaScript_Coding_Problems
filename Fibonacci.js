// Problem- Create a Fibonacci Series
//function should take in 3 parameters — (1) the length of the array, (2) the first integer, (3) the second integer


const fibonacci = (leng , a , b ) => {
    let temp , series = [a,b];
    while(leng - 3 >=0) {
        temp = b;
        b= a+b;
        series.push(b);
        a=temp;
        leng --;
    }
  
   return series
}

const result = fibonacci(7, 2, 3);
console.log(result); // [2,  3,  5, 8, 13, 21, 34]


// The pattern:

// b = previous element

// a = previous, previous element

// The next character will be (a + b)

// Once you have (a + b), the current b becomes a, and the current (a+b) becomes b