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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let lca = null
    let height = 0
    dfs(root, 0)
    return lca
    function dfs(node, curDepth)  {
        if (node == null) return curDepth - 1
        const leftDepth = dfs(node.left, curDepth + 1)
        const rightDepth = dfs(node.right, curDepth + 1)
        height = Math.max(curDepth, height)
        if (leftDepth == height && rightDepth == height) 
            lca = node
        return Math.max(leftDepth, rightDepth)
    } 
};