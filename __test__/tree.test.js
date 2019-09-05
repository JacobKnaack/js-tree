'use strict';

const jsTree = require('../');
const Tree = jsTree();
const Node = jsTree('node');

describe('Testing binary tree classes', () => {
  const tree = new Tree();
  describe('Should have correct properties', () => {
    it('tree should have root', () => {
      const match = { root: null };
      expect(tree).toMatchObject(match);
    });
  });


  describe('tree methods', () => {
    it('should be able to append nodes', () => {
      expect(tree.append(20)).toMatchObject({ value: 20, right: null, left: null });
      expect(tree.append(30)).toMatchObject({ value: 30, right: null, left: null });
      expect(tree.root.left).toMatchObject({ value: 30, right: null, left: null });
    });
    it('should be able to return all the leaves', () => {
      tree.append(40);
      tree.append(50);
      expect(tree.leaves()).toMatchObject([new Node(40), new Node(50)]);
    });
    it('Can traverse the tree', () => {
      expect(tree.traverse({ order: 'preorder', callback: (current) => current.value += 1 }).value).toBe(21);
    });
  })
});