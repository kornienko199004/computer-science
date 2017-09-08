/* eslint no-else-return: 0 */

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.node = (parent, key) => ({
      key,
      parent,
      left: null,
      right: null,
    });
  }

  tree() {
    return this.root;
  }

  isValidBST(node, min, max) {
    if (node === null) {
      return true;
    }
    return (
      node.key > min &&
      node.key < max &&
      this.isValidBST(node.left, min, node.key) &&
      this.isValidBST(node.right, node.key, max)
    );
  }

  isValid(node) {
    return this.isValidBST(node, -Infinity, Infinity);
  }

  insert(node, key) {
    if (this.root === null && !node) {
      this.root = this.node(null, key);
      return this.root;
    } else if (this.root !== null && !node) {
      node = this.root;
    }
    const child = node.key > key ? 'left' : 'right';
    if (node[child]) {
      this.insert(node[child], key);
    } else {
      node[child] = this.node(node, key);
    }
    return node[child];
  }

  search(node, key) {
    if (!node) {
      if (this.root) {
        node = this.root;
      } else {
        return false;
      }
    }
    if (key === node.key) {
      return node;
    }
    if (key > node.key) {
      return node.right && this.search(node.right, key);
    } else {
      return node.left && this.search(node.left, key);
    }
  }

  min(node) {
    if (!node) {
      if (this.root) {
        node = this.root;
      } else {
        return false;
      }
    }
    if (node.left === null) {
      return node;
    }
    return this.min(node.left);
  }

  max(node) {
    if (!node) {
      if (this.root) {
        node = this.root;
      } else {
        return false;
      }
    }
    if (node.right === null) {
      return node;
    }
    return this.max(node.right);
  }

  next(key) {
    let node = this.search(null, key);
    if (node.right !== null) {
      return this.min(node.right);
    }
    let parent = node.parent;
    while (parent !== null && node === parent.right) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }
}

export default BinarySearchTree;