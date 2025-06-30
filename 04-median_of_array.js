// var findMedianSortedArrays = function (nums1, nums2) {
//   const merged = [...nums1, ...nums2].sort((a, b) => a - b);
//   const n = merged.length;

//   if (n % 2 === 0) {
//     console.log(merged[n / 2 - 1], merged[n / 2]);

//     return (merged[n / 2 - 1] + merged[n / 2]) / 2;
//   } else {
//     return merged[Math.floor(n / 2)];
//   }
// };

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1); // Ensure nums1 is shorter
  }

  let m = nums1.length;
  let n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    let i = Math.floor((low + high) / 2);
    let j = Math.floor((m + n + 1) / 2) - i;

    let maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    let minRight1 = i === m ? Infinity : nums1[i];

    let maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    let minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }

  throw new Error("Invalid input");
};
// Example usage:
// const nums1 = [1, 3];
// const nums2 = [2];

let nums1 = [1, 2],
  nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
