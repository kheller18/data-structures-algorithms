function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function remove(item) {
  var currNode = this.find(item);
  if(!(currNode.next === null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

function findLast() {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    currNode = currNode.next;
  }
  return currNode;
}

function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while(!(currNode.previous === null)) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}
