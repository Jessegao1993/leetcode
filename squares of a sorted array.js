/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
var sortedSquares = function(nums) {
    
    let num1=[];
    nums.forEach((item)=>num1.push(Math.pow(item,2)));
    num1.sort((a,b)=>a-b);
    return num1;

};