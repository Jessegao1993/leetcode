/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//MaxDepth-DFS
/*
var maxDepth = function(root) {
    if(!root){
     return 0;
    }else{
     let left = maxDepth(root.left);
     let right = maxDepth(root.right);
     return Math.max(left,right)+1;
    }
 }

MaxDepth-BFS
var maxDepth = function(root) {
    if(!root) return 0;
    let queue = [{node:root,depth:1}];
    let res = 0;
    while(queue.length){
        let {node,depth} = queue.shift();
        if(node.left) queue.push({node:node.left,depth:depth+1});
        if(node.right) queue.push({node:node.right,depth:depth+1});
        res = depth;
    }
    return res;
}

*/
