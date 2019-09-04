'use strict';

const Tree = require('../BinaryTree.js');

describe('Testing binary tree classes', () => {
  describe('Should have correct properties', () => {
    it('tree should have root', () => {
      const tree = new Tree();
      const match = {root:null};
      expect(tree).toMatchObject(match);
    });
  });
});