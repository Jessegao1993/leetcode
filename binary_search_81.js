//搜索旋转排序数组 II
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

 //while嵌套while问题
var search = function(nums, target) {
	let left = 0;
	let right = nums.length-1;

	while(left<=right){
		const mid = Math.floor((left+right)/2);
		if(nums[mid]==target){
			return true;
		}
		//解决重复元素
		if(nums[left]==nums[mid]){
			left++;
			continue;
		}
		//判断哪一半的元素是有序的
		if(nums[mid]>nums[left]){//左一半有序
			if(nums[left]<=target&&target<nums[mid]){
				right = mid - 1;
			}else{
				left = mid + 1;
			}

		}else{//右一半有序
			if(nums[mid]<target&&target<=nums[right]){
				left = mid + 1;
			}else{
				right = mid - 1;
			}
		}
	}

	return false;
};


/*

class Solution:
 def search(self, nums, target):
 l, r = 0, len(nums)-1
 while l <= r:
 mid = l + (r-l)//2
 if nums[mid] == target:
 return True
 while l < mid and nums[l] == nums[mid]: # tric
 l += 1
 # the first half is ordered
 if nums[l] <= nums[mid]:
 # target is in the first half
 if nums[l] <= target < nums[mid]:
 r = mid - 1
 else:
 l = mid + 1
 # the second half is ordered
 else:
 # target is in the second half
 if nums[mid] < target <= nums[r]:
 l = mid + 1
 else:
 r = mid - 1
 return False
 */