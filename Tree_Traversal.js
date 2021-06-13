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
 * @return {number[]}
 */
//前序遍历：DFS递归
//  var preorderTraversal = function(root) {
//     let res = [];
//     let dfs = (root)=>{
//         if(!root) return;
//         res.push(root.val);
//         dfs(root.left);
//         dfs(root.right);
//     }
//     dfs(root);
//     return res;
// };

//后序遍历：DFS递归
// var postorderTraversal = function(root) {
//     let res = [];
//     let dfs = (root)=>{
//         if(!root) return;
//         dfs(root.left);
//         dfs(root.right);
//         res.push(root.val);
//     }
//     dfs(root);
//     return res;
// };
//中序遍历：DFS递归
// var inorderTraversal = function(root) {
//     let res = [];
//     let dfs = (root)=>{
//         if(!root) return;
//         dfs(root.left);
//         res.push(root.val);
//         dfs(root.right);
//     }
//     dfs(root);
//     return res;
// };

//------------------------------------------------------------

//前序遍历：迭代
var preorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let stack = [root];
    while(stack.length){
        let curr = stack.pop();// 遇到根，直接入结果集
        res.push(curr.val);
        if(curr.right){// 先入栈右边，这样后出栈
            stack.push(curr.right);
        }
        if(curr.left){  // 后入栈左边，这样先出栈左边
            stack.push(curr.left);
        }
    }
    return res;
};


//后序遍历：迭代
var postorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let stack = [root];
    while(stack.length){
        let curr = stack.pop();
        if(curr.left){
            stack.push(curr.left);
        }
        if(curr.right){
            stack.push(curr.right);
        }
        res.unshift(curr.val);
    }
    return res;
};

//中序遍历：迭代
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    if(!root){
        return res;
    }
    let node = root;
    
    while(node || stack.length) {
      while(node) {
       stack.push(node)
        node = node.left
      }
      
      node = stack.pop()
      res.push(node.val)
      node = node.right
    }
    return res;   
}

