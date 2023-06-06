'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder(){
    const results = [];

    const traverse = (node) => {
      results.push(node.value);

      if(node.left) {
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  inOrder(){
    const results = [];

    const traverse = (node) => {

      if(node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder(){
    const results = [];

    const traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  findMinNode(node){
    if(node.left === null){
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode(){
    return this.root;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor(){
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else if (node.left !== null) {
          return insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else if (node.right !== null) {
          return insert(node.right);
        }
      } else {
        return null;
      }
    };
    insert(this.root);
  }

  containsValue(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return true;
  }

  // insert(data){
  //   let newNode = new Node(data);

  //   if(this.root === null){
  //     this.root = newNode;
  //   } else {
  //     this.insertNode(this.root, newNode);
  //   }
  // }

  // insertNode(node, newNode){
  //   if(newNode.data < node.data){
  //     if(node.left === null){
  //       node.left = newNode;
  //     } else {
  //       this.insertNode(node.left, newNode);
  //     }
  //   } else {
  //     if(node.right === null){
  //       node.right = newNode;
  //     } else {
  //       this.insertNode(node.right, newNode);
  //     }
  //   }
  // }

  // remove(data){
  //   this.root = this.removeNode(this.root, data);
  // }

  // removeNode(node, key){
  //   if(node === null){
  //     return null;
  //   } else if(key < node.data) {
  //     node.left = this.removeNode(node.left, key);
  //     return node;
  //   } else if (key > node.data){
  //     node.right = this.removeNode(node.right, key);
  //     return node;
  //   } else {
  //     if(node.left === null && node.right === null){
  //       node = null;
  //       return node;
  //     }
  //     if(node.left === null){
  //       node = node.right;
  //       return node;
  //     } else if (node.right === null){
  //       node = node.left;
  //       return node;
  //     }

  //     let aux = this.findMinNode(node.right);
  //     node.data = aux.data;

  //     node.right = this.removeNode(node.right, aux.data);
  //     return node;
  //   }
  // }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
}
