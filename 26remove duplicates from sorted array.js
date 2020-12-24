// remove duplicates from sorted array without using extra space
// * set the first element as a variable. Check from the second element of the array to compare with the former one, if them are equal, run splice method to remove the current one, or set the next element as the "first" one. 
var removeDuplicates = function (nums) {//nums is input array
let last = nums[0];
for (let i = 1; i < nums.length; i++) {
if (nums[i] === last) {
nums.splice(i, 1);
--i;
}
last = nums[i];
}

return nums.length ;
};