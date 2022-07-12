// Example- III=3 , XXX=30
var romanToInt = function(s) {
    let answer= 0;
    const arr =[]
    const reverse = s.split("").reverse().join("");
    reverse.split("").forEach(a=>arr.push(a))
    reverse.split('').forEach((a, index)=>{
        if(a==='I') {
            if(index!==0 && (arr[index-1]==='V' || arr[index-1]==='X')){
                answer-=1;
            } else {
                answer+=1;
            }
        } else if(a==='V') {
            answer+=5;
        } else if(a==='X') {
            if(index!==0 && (arr[index-1]==='L' || arr[index-1]==='C')){
                answer-=10;
            } else {
                answer+=10;
            }
           
        } else if(a==='L') {
            answer+=50;
        } else if(a==='C') {
            if(index!==0 && (arr[index-1]==='D' || arr[index-1]==='M')){
                answer-=100;
            } else {
                answer+=100;
            }
        } else if(a==='D') {
            answer+=500;
        } else if(a==='M') {
            answer+=1000;
        }
    })
    return answer;
};

console.log(romanToInt('MCMXCIV'))