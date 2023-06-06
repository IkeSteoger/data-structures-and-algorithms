`use strict`;

const { BinaryTree, BinarySearchTree } = require(`../index.js`);

describe (`Binary Tree`, () => {

  it(`Can successfully instantiate an empty tree`, () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it(`Can successfully instantiate a tree with a single root node`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree.root.value).toEqual(1);
  });

  it(`For a Binary Search Tree, can successfully add a left child and right child properly to a node`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(tree.root.value).toEqual(1);
    expect(tree.root.right.value).toEqual(2);
    expect(tree.root.right.right.value).toEqual(3);
  });

  it(`Can successfully return a collection from a pre-order traversal`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(tree.preOrder()).toEqual([1, 2, 3]);
  });

  it(`Can successfully return a collection from an in-order traversal`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);

    expect(tree.inOrder()).toEqual([1]);
  });

  it(`Can successfully return a collection from a post-order traversal`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);

    expect(tree.postOrder()).toEqual([1]);
  });

  it(`Returns false for the contains method, given an existing or non-existing node value`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(tree.containsValue(4)).toBeFalsy();
  });

  it(`Returns true for the contains method, given an existing node value`, () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(tree.containsValue(3)).toBeTruthy();
  });

});
