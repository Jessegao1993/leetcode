/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

 Return the running sum of nums.
*/

var runningSum = function (nums) {
    let sum = [];
    sum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }
    return sum;
};