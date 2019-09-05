'use strict';

const Node = require('./Node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   *
   * @param root
   * @param cb
   */
  static postorder(root, cb) {

  }

  /**
   *
   * @param {Node} root
   * @param {function} cb
   */
  static preorder(root, cb) {
    const nodeStack = [];
    nodeStack.push(root);

    while (nodeStack.length) {
      let current = nodeStack.pop();
      if (cb) cb(current);
      if (current.left) nodeStack.push(current.left);
      if (current.right) nodeStack.push(current.right);
    }

    return root;
  }

  /**
   * @return the appended node
   * @param {any} value
   */
  append(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;

    } else {
      const treeQueue = [];
      treeQueue.push(this.root);

      while(treeQueue.length) {
        let current = treeQueue.shift();
        if (!current.left) {
          current.left = newNode;
          return newNode;
        } else {
          treeQueue.push(current.left);
        }

        if (!current.right) {
          current.right = newNode;
          return newNode;
        } else {
          treeQueue.push(current.right);
        }
      }
    }
  }

  traverse(options) {
    let cb;
    let order;
    if (!!options) {
      options.order ? order = options.order : null;
      options.callback ? cb = options.callback : null;
    }

    switch(order) {
      case "preorder":
        return BinaryTree.preorder(this.root, cb);
      case "postorder":
        return BinaryTree.postorder(this.root, cb);
      default:
        return BinaryTree.preorder(this.root, console.log);
    }
  }

  /**
   * @returns an array of leaves that the tree contains
   */
  leaves() {

  }
}

module.exports = BinaryTree;