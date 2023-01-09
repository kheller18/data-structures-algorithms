function HashTable() {
  this.table = newArray(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.values = [];
  this.put = put;
  this.get = get;
}

// simple hash function
function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

// best hash function
function betterHash(string) {
  var H = 31;
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length -1;
  }
  return parseInt(total);
}

// put function (linear probing)
function put(key, data) {
  var pos = this.betterHash(key);
  if (this.table[pos] === undefined) {
    this.table[pos] = key;
    this.values[pos] = data;
  } else {
    while (this.table[pos] !== undefined) {
      pos++;
    }
    this.table[pos] = key;
    this.values[pos] = data;
  }
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i][0] !== undefined) {
      console.log(i + ": " + this.table[i])
    }
  }
}

function get(key) {
  var hash = -1;
  hash = this.betterHash(key);
  if (hash > -1) {
    for (var i = hash; this.table[hash] !== undefined; i++) {
      if (this.table[hash] == key) {
        return this.values[hash];
      }
    }
  }
  return undefined;
}


// creates second array (referred to as a chain)
function buildChains() {
  for (var i = 0; i < this.table.length; i++) {
    this.table[i] = []
  }
}


var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
var hTable = new HashTable()
for (var i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
