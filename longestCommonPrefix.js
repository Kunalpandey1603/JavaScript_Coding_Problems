var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // loop through all characters of the very first string.
        console.log("strs[0][i]", strs[0][i]);
        for (let j = 1; j < strs.length; j++) {
            // loop through all other strings in the array
            console.log("strs[j][i]", strs[j][i]);
            if (strs[j][i] !== char) return prefix;
        }
        prefix = prefix + char;
        console.log("prefix", prefix);
    }

    return prefix;
};

let output = '';
output = longestCommonPrefix(["baab", "bacb", "b", "cbc"]);
console.log('output', output);
output = longestCommonPrefix(["flower", "flow", "flight"]);
console.log("output", output);
output = longestCommonPrefix(["a", "a", "a"]);
console.log("output", output);