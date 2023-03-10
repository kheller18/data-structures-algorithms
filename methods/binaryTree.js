function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// BST class
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.find = find;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.getSmallest = getSmallest;
  this.update = update;
}

function preOrder(node) {
  if (node !== null) {
    putstr(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    putstr(node.show() + " ");
  }
}

function find(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
}

// search for minimum value
function getMin() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

// search for maximum value
function getMax() {
  var current = this.root;
  while(current.right !== null) {
    current = current.right;
  }
  return current.data;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node === null) {
    return null;
  }
  if (data === node.data) {
    // node has no children
    if(node.left === null && node.right === null) {
      return null;
    }
    //node has no left child
    if (node.left === null) {
      return node.right;
    }
    // node has no right child
    if (node.right === null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = this.removeNode(node.right, tempNode.data);
    return node;
  } else if (data <node.data) {
    node.left = this.removeNode(node.left, data);
    return node;
  } else {
    node.right = this.removeNode(node.right, data);
    return node;
  }
}

function getSmallest(node) {
  if (node.left == null) {
    return node;
  } else {
    return getSmallest(node.left);
  }
}

// update function:
function update(data) {
  var grade = this.find(data);
  grade.count++;
  return grade;
}
