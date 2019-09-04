'use strict';

const Node = require('./Node.js');
const BinaryTree = require('./BinaryTree.js');

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

two.right = three;
two.left = one;
three.right = four;

const stackDepthFirst = (root) => {
  const stack = [];

  stack.push(root);
  while(stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
    console.log(currentNode.value);
  }
}

const recursiveDepthFirst = (node) => {
  if (node === null) {
    return;
  }
  console.log(node.value);
  recursiveDepthFirst(node.left);
  recursiveDepthFirst(node.right);
}

// recursiveDepthFirst(two);
stackDepthFirst(two);