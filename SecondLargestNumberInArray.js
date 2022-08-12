const sampleArray = [2,3,9,10,4,15,5];
let largest = 0;
let secondLargestFirst = 0;

// using forEach
sampleArray.forEach((num,index)=>{
    if(index>0) {
        if (num > sampleArray[index - 1] && num > largest) {
            secondLargestFirst = largest;
          largest = num;
        }
    }
})

// using reduce
// let largest = 0;
const secondLargest =  sampleArray.reduce((acc, curr, index)=> {
   if(index>0) {
        if (curr > sampleArray[index - 1] && curr > largest) {
          acc = largest;
          largest = curr;
        }
    }
    return acc;
}, 0)

console.log("secondLargest", secondLargest);