/* Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.
*/

var sumOddLengthSubarrays = function(arr){
	let running_sum = 0;
	for(let i = 0; i < arr.length; i++){
		for(let j = i+1; j<=arr.length; j++){
			newarray = arr.slice(i,j);
			if(newarray.length % 2 != 0){
				running_sum += newarray.reduce((acc,curr) => acc + curr);
			};
		};
	};
	return running_sum;
};