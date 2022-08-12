var twoSum = function (nums, target) {
  for (let outer = 0; outer < nums.length; outer++) {
    for (let inner = outer + 1; inner <= nums.length; inner++) {
      if (nums[outer] + nums[inner] === target) {
        return [outer, inner];
      }
    }
  }
};

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);
