/*
二分查找基本题型：
1. 基础：查找一个数
2. 进阶：如果存在多个满⾜条件的元素，返回最左边满⾜条件的索引。
3. 进阶：如果存在多个满⾜条件的元素，返回最右边满⾜条件的索引。
4. 进阶：数组不是整体有序的。 ⽐如先升序再降序，或者先降序再升序。
5. 进阶：将⼀维数组变成⼆维数组。
*/
var search = function(nums, target) {
 let l = 0;
 let r = nums.length-1;
 let mid = 0;

 while(l<=r){
 	mid = Math.floor(l+(r-l)/2);
 	if(nums[mid]==target){
 		return mid;
 	}else if(nums[mid]<target){
 		l = mid + 1;
 	}else{
 		r = mid - 1;
 	}
 }
 return -1;
};