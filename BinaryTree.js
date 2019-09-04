'use strict';

const Node = require('./Node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  static postorder(root, cb) {

  }

  static preorder(root, cb) {
    const nodeStack = [];
    nodeStack.push(root);

    while (nodeStack.length) {
      let current = nodeStack.pop();
      if (cb) cb(current);
      if (current.left) nodeStack.push(current.left);
      if (current.right) nodeStack.push(current.right);
    }
  }

  append(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }


  }

  traverse(args) {
    let cb;
    if (!!args.callback) cb = args.callback;

    switch(args.order) {
      case "preorder":
        return BinaryTree.preorder(this.root, cb);
      case "postorder":
        return BinaryTree.postorder(this.root, cb);
      default:
        return BinaryTree.preorder(this.root, cb);
    }
  }
}

module.exports = BinaryTree;