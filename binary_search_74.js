/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length) return false;
    let x = matrix.length-1;
    let y = 0;

    while(x>=0&&y<matrix[0].length){
        if(matrix[x][y]==target){
            return true;
        }else if(matrix[x][y]>target){
            x-=1;
        }else{
            y+=1;
        }
    }
    return false;
};