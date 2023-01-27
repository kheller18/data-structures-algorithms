function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

// add function. index of checks to see if the data is already stored because it must be unique
function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

// remove function. first check to see if the requested data is in the array. If it is, we call the splice function to remove it and return true. If it's not there, return false.
function remove (data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

// show function: allows us to see the members of a set
function show() {
  return this.dataStore;
}

// contains function: looks to see if a specified member is part of the set (helper function)
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}

// union function:
function union(set) {
  var tempSet = newSet;
  for (var i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; i++) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i])
    }
  }
  return tempSet;
}

// intersect function: each time a member of the first set is found to be a member of the second set it is added to a new set, which is the return value of the function.
function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i<this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

// size function: used to help with subset
function size() {
  return this.dataStore.length;
}

// function subset(set) {
//   if (this.size() > set.size()) {
//     return false;
//   } else {
//     for each(var member in this.dataStore) {
//       if (!set.containers(member)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// difference function: function returns a set that contains those members of the first set that are not in the second set.
function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i <this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i])
    }
  }
  return tempSet;
}
