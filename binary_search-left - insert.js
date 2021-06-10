//寻找最左插入位置

function bisect_left(nums,x){
	let left = 0;
	let right = nums.length-1;

	while(left<=right){
		const mid = Math.floor((left+right)/2);
		if(nums[mid]>=x){
			right = mid - 1; 
		}
		if(nums[mid]<x){
			left =  mid + 1;
		}
	}

	return left;
}

//寻找最右插入位置

function bisect_right(nums,x){
	let left = 0;
	let right =  nums.length-1;

	while(left<=right){
		const mid = Math.floor((left+right)/2);
		if(nums[mid]<=x){
			left = mid + 1;
		}else{
			right = mid - 1;
		}
	}

	return left;
}






