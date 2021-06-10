var nextGreatestLetter = function(letters, target) {
    let arr = Array.from(new Set(letters))//去重
    let left = 0, right = arr.length - 1
    while (left < right){
        let mid = Math.floor((left+right)/2)

        if (arr[mid] <= target) left = mid + 1
        else if (arr[mid] > target) right = mid
    }

    if (arr[right] > target) return arr[right]
    else return arr[0]
};

