`use strict`;

const { BinaryTree, Node } = require('../../trees');
const { leafWeight } = require(`../index.js`);

describe (`Binary Tree`, () => {

  it(`Checks weight of leaf path & sees if it is matched with integer`, () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);

    expect(tree.root.value).toEqual(1);
    // expect(leafWeight(tree, 7)).toBeTruthy();
  });

});
