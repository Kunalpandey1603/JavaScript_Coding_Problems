let str = 'kunal bhaskar pandey';

str = str.replaceAll(" ", "");
console.log("str", str); // kunalbhaskarpandey

let obj = {
}
for (let i of str) {
  if (obj[i] === undefined) {
    obj[i] = 1;
  } else {
    obj[i] += 1;
  }
}

console.log("obj", obj);
/* {
  k: 2,
  u: 1,
  n: 2,
  a: 4,
  l: 1,
  b: 1,
  h: 1,
  s: 1,
  r: 1,
  p: 1,
  d: 1,
  e: 1,
  y: 1
} */