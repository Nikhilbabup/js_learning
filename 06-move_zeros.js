function moveZeroes(nums) {
  let insertPos = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  console.log(nums);
  // fill the rest with zero
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
}

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
