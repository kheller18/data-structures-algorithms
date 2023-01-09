function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.previous = previous;
  this.next = next;
  this.hasPrevious = hasPrevious;
  this.hasNext = hasNext;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

// adds element to list increments listsize by one and stores element passed to it
function append(element) {
  this.dataStore[this.listSize++] = element;
}

// remove an element from a list
// first we use develop a method to find it, then remove it
function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i;
    }
    return -1;
  }
}

// function to remove by splice method
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
    --this.listSize;
    return true;
  }
  return false;
}

// determining number of elements in a list
function length() {
  return this.listSize;
}

// retrieving lists Elements
function toString() {
  return this.dataStore;
}

//inserting an element into a list at specified position
function insert(element, after) {
  var insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize
    return true;
  }
  return false;
}

//removing all elements from a list
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

// determining if a given value is in a list
function contains(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true;
    }
    return false;
  }
}

// moving to and retrieving a list element
function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.position];
}

// iterating through a list
function previous() {
  return this.dataStore[--this.pos]
}

function next() {
  return this.dataStore[this.pos++]
}

function hasNext() {
  if (this.pos > this.listSize -1) {
    return false;
  } else {
    return true;
  }
}

function hasPrevious() {
  if (this.pos <= 0) {
    return false;
  } else {
    return true;
  }
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1
}

function currPos() {
  return pos;
}

// to traverse you do
for (names.front(); names.hasNext();) {
  console.log(names.next())
}
