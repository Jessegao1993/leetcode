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
 * @return {boolean}
 */


//递归处理DFS preorder
/*
var isSymmetric = function(root) {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.val !== t.val) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};
*/

 /* BFS Approach*/
    /*
    if(!root) return true;
    let q1 = [root.left];
    let q2 = [root.right];
    while(q1.length>0 || q2.length>0){
        let e1 = q1.shift();
        let e2 = q2.shift();
        if(!e1 && !e2) continue; //both are null
        if(!e1 || !e2 || e1.val !== e2.val) return false; //not similar return false
        //scan q1 from L -> R
        q1.push(e1.left); q1.push(e1.right);
        //Scan q2 from R -> L
        q2.push(e2.right); q2.push(e2.left);
    }
    return true;
    */
    
    /* DFS Approach */
    if(!root) return true;
    let s1 = [root.left];
    let s2 = [root.right];
    while(s1.length> 0 || s2.length>0){
        let e1 = s1.pop();
        let e2 = s2.pop();
        if(!e1 && !e2) continue;
        if(!e1 || !e2 || e1.val !== e2.val) return false;
        //Push stack s1 from L -> R
        s1.push(e1.left); s1.push(e1.right);
        s2.push(e2.right); s2.push(e2.left)
    }
    return true;

