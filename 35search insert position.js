// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// * use binary search


const searchInsert = (nums, target) => {//find original left and right
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {		//find original mid in a while loop 
		//let mid = (left + (right - left) / 2) | 0;//**
		let  mid = Math.floor(left+(right-left)/2);
		if (nums[mid] === target) return mid;
		else if (nums[mid] > target) right = mid - 1;
		else left = mid + 1;
	}

	return left;
};