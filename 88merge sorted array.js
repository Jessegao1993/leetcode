//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

var merge = function(nums1, m, nums2, n) {
  const nums = nums1.slice(0, m).concat(nums2.slice(0, n));
  nums.sort((a, b) => a - b);
  nums.forEach((item, i) => nums1[i] = item);
};