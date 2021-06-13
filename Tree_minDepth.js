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
/*

MinDepth-BFS

var minDepth = function(root){
    if(!root) return 0;
    let queue = [{node:root,level:1}];

    while(queue.length){
        let {node,level} = queue.shift();
        if(!node.left&&!node.right) return level;
        if(node.left) queue.push({node:node.left,level:level+1});
        if(node.right) queue.push({node:node.right,level:level+1});
    }
}

MinDepth-DFS

var minDepth = function(root) {
    if(!root) return 0;
    let min_depth = Infinity;
    function dfs(root,depth){
        if(!root) return;
        if(!root.left&&!root.right){
            min_depth = Math.min(depth,min_depth);
            return;
        }
        dfs(root.left,depth+1);
        dfs(root.right,depth+1);
    }
    dfs(root,1);
    return min_depth;
}
*/



