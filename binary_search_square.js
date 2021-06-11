//leetcode 69 求二次方根
const mySqrt = function(x){
    if(x<2) return x;
    let left = 1;
    let right =x;

    while(left<=right){
        const mid = Math.floor(left+(right-left)/2);//防溢出
        if(mid*mid == x){
            return mid;
        }
        if(mid*mid<x){
            left  = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return right;
}

//牛顿迭代法
var mySqrt = function(x) {
    if (x===0) return 0;
    var re = 1;
    while(!(re*re<=x&&(re+1)*(re+1)>x)){
        re = parseInt(re-(re*re-x)/(2*re))
    }
    return re
};