//满足条件的最左边的值

function binarySearchLeft(nums, target) {
	let l = 0;
	let r = nums.length-1;

	while(l<=r){
		const mid = Math.floor(l+(r-l)/2);
		if(nums[mid]==target){
			r = mid-1;
		}
		if(nums[mid]<target){
			l = mid + 1;
		}
		if(nums[mid]>target){
			r = mid - 1;
		}
	}

	//检查是否越界
	if(l>=nums.length||nums[l]!=target){
		return;
	}

	return l;

}