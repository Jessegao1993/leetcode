//能力检测二分
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
// lo hi mid 代表的是速度K，解空间是最少每小时吃一根到最大每小时吃完最多数量的一堆香蕉。在这个初始区间内二分缩小范围，直到返回最小能完成的速度K。
 var minEatingSpeed = function (piles, H) {//H是总时间
    let lo = 1,
    hi = Math.max(...piles);
    // [l, r) ， 左闭右开的好处是如果能找到，那么返回 l 和 r 都是⼀样
    while (lo <= hi) {
    let mid = lo + ((hi - lo) >> 1);//位运算舍入？高级写法
    if (canEatAllBananas(piles, H, mid)) {
    hi = mid - 1;
    } else {
    lo = mid + 1;
    }
    }
    return lo; // 不能选择hi
   }


//判断能否在H小时内以K速度吃完的函数
function canEatAllBananas(piles, H, mid) {//输入 香蕉堆，时长，推测的速度mid
    let h = 0;
    for (let pile of piles) {//吃完每堆时间的和
    h += Math.ceil(pile / mid);//向下舍入，必须得吃完
    }
    return h <= H;//规定时间内能否吃完
   }
   