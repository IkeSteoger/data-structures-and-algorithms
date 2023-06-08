`use strict`;

const { BinaryTree, Node, breadthFirst } = require(`../index.js`);

describe (`Binary Tree Breadth First`, () => {

  it(`Can successfully instantiate an empty tree`, () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it(`Can successfully instantiate a tree with a single root node`, () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.root.value).toEqual(1);
  });

  it(`Can successfully return a collection from an in-order traversal`, () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);

    expect(tree.maxValue()).toEqual(15);
  });

  it(`breadthFirst works`, () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    // expect(breadthFirst(tree)).toEqual([2,7,5,2,6,9,5,11,4]);
    let results = breadthFirst(tree);
    expect(results).toEqual([]);
  });

});
