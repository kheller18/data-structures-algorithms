function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while(!(currNode.next) === null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

// helper function for removing
function findPrevious(item) {
  var currNode = this.head;
  while(!(currNode.next === null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

// remove function
function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next; // this line skips over the node we want to remove
  }
}

var cities = new LList();
cities.insert("Conway", "head")
cities.insert("Russellville", "Conway")
cities.insert("Alma", "Russellville")
cities.display(); // displays Conway, Russelville, Alma

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log()
cities.remove("Carlisle");
cities.display();
