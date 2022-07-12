// Problem-  how do you find if 2 words are anagrams of each other?

const hashMap = (string) => {
  let mappedObj = {};
  for (let i of string) {
    if (mappedObj[i] === undefined) {
      mappedObj[i] = 1;
    } else {
      mappedObj[i] += 1;
    }
  }

  return mappedObj;
};

const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = hashMap(str1);
  let obj2 = hashMap(str2);
  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) return false;
  }
  return true;
};

console.log(checkAnagram("kunal", "kunal")); // true
console.log(checkAnagram("lkoiuyyyy", "gasytasfdfvshfsd")); // false
console.log(checkAnagram("a", "aa")); // false
console.log(checkAnagram("jjjjaaaaaa", "aaaaaajjjj")); // true
