//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).
var fib = function(n) {
    
    fibArr = [0,1];
    
    for(let i=2;i<=n;i++){
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
        fibArr.push(fibArr[i]);
    }
    
    
    return fibArr[n];
    
};