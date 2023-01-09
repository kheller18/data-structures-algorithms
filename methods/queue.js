function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

// enqueue adds element to end of a queue
function enqueue(element) {
  this.dataStore.push(element);
}

// dequeue removes element from front of queue
function dequeue() {
  return this.dataStore.shift();
}

// view front element
function front() {
  return this.dataStore[0];
}

// view back element
function back() {
  return this.dataStore[this.dataStore.length-1];
}

// function to display all elements in a queue
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

// view if queue is empty
function empty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}

var q = new Queue;
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("front of queue: " + q.front());
console.log("back of queue: " + q.back());
