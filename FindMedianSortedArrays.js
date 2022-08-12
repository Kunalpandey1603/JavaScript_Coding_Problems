/* Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays. */ ;


var findMedianSortedArrays = function (nums1, nums2) {

     let mergedarray = [...nums1, ...nums2].sort((a, b) => a - b);
     if(mergedarray.length %2 === 0) {
        const test = (mergedarray.length / 2)
        return (mergedarray[test] + mergedarray[test] - 1) / 2;
     } else {
         return mergedarray[Math.trunc(mergedarray.length / 2)]
     }
     

};

const nums1 = [3];
const nums2 = [-2, -1];



console.log(findMedianSortedArrays(nums1,nums2)); 