function Patient(name, code) {
  this.name = name;
  this.code = code;
}

// function to for sequential search to find the element with the highest priority code (the lowest number)
function dequeue() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    }
  }
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
  }
  return retStr;
}