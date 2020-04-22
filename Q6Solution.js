// 06: How do you find all pairs of an integer array whose sum is equal to a given number?
function twoPairs(nums, target_num) {
  const map = [];
  const indexnum = [];

  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      let index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      map[target_num - nums[x]] = x;
    }
  }
  return indexnum;
}
console.log(twoPairs([10, 20, 10, 40, 50, 60, 70], 50));
// Expected answer should be 2 and 3
