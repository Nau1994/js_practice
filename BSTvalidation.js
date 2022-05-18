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
var isValidBST = function(root) {
    return traverseInOrder(root);
};

function traverseInOrder(node, list=[],res=true){
   
  if( node.left && res) {
     res = traverseInOrder(node.left, list,res);
  }
    //console.log(list,node.val);
    if ((list.length===0 || node.val>list[list.length-1])){
  list.push(node.val);}
    else{
        return false;
    }
  if(node.right && res) {
     res= traverseInOrder(node.right, list,res);
  }
  return res ;
}