'use strict';

const leafWeight = (binaryTree, num) => {
  const traverse = (node) => {
    let temp = num;
    temp = temp - node.value;
    console.log('TEMP VALUE', temp);
    if(node.left)traverse(node.left);
    if(node.right)traverse(node.right);
    if(!node.left && !node.right && temp === 0){
      return true;
    }
    return false;
  };
  traverse(binaryTree.root);
};


module.exports = {
  leafWeight
};
