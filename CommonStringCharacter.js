// Problem- Find the intersection of 2 strings — aka find the common characters of 2 strings, no duplicates.

const findCommonCharacters = (string1, string2) => {
    // store common char in this err
    const commonChar = [];
    for(let index of string1) {
        if(string2.includes(index) && !commonChar.includes(index)) {
            commonChar.push(index)
        }
    }
    return commonChar;
}


const result = findCommonCharacters('abcd', 'abuy');
console.log(result) // [ 'a', 'b' ]

const result2 = findCommonCharacters('qwe', 'poi');
console.log(result2); // []