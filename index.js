'use strict';

const Tree = require('./class/BinaryTree.js');
const Node = require('./class/Node.js');

module.exports = (type) => {
  if (type === 'node') {
    return Node;
  }
  return Tree;
}
