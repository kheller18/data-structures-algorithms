function Dictionary() {
  this.datastore = {};
}

// add function for key-value pairs
function add(key, value) {
  this.datastore[key] = value;
}

// find function for key-value pairs
function find(key) {
  return this.datastore[key];
}

// removing key-value pairs (delete function)
function remove(key) {
  delete this.datastore[key];
}

// view all key-value pairs in a dictionary
function showAll() {
  for (var key in this.datastore) {
    console.lo(key + " -> " + this.datastore[key]);
  }
}

// count() for how many entries there are
function count() {
  var n = 0;
  for (var key in this.datastore) {
    n++;
  }
  return n;
}

// clear()
function clear() {
  for (var key in this.datastore) {
    delete this.datastore[key];
  }
}

function showAll() {
  var keys = Object.keys(this.datastore);
  keys.sort()
  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + " -> " + this.datastore[keys[i]]);
  }
}

var pbook = new Dictionary();
pbook.add("Mike", "123")
pbook.add("David", "456")
pbook.add("Cynthia", "789")
console.log("Davids extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
