function seqSearch(arr, data) { // reorganizes data by 80 20 rule
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data && i > (arr.length * 0.2)) {
      swap(arr, i, 0)
      return true;
    } else if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

// swap function
function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

// findMin function
function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min;
}

// findMax function
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

// binary search (must be sorted)
function binSearch(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid=Math.floor((upperBond + lowerBound) / 2);
    console.log("current midpoint: " + mid)
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid -1;
    } else {
      return mid;
    }
  }
  return -1;
}

// counting occurrences
function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
    for (var i = position-1; i > 0; --i) { // works down the array counting occurrences of found value
      if (arr[i] == data) {
        ++count;
      } else {
        break
      }
    }
    for (var i = position + 1; i < arr.length; ++i) { // works up the array counting occurrences of found value
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }
  return count;
}
