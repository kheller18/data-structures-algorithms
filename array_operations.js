// Adding elements to end of array (.push())
  var nums = [1, 2, 3, 4, 5]
  nums.push(6)
  console.log(nums) // [1, 2, 3, 4, 5, 6]

// Adding elements to beginning of array (.unshift())
  var nums = [2,3,4]
  nums.unshift(1)
  console.log(nums) // [1, 2,3,4]

// Removing elements from an Array End (.pop)
    var nums = [1, 2, 3]
    nums.pop() // [1,2]

// Beginning (.shift)
    var nums = [9,1,2,3]
    nums.shift() // [1,2,3]

// Middle (.splice)
    var nums = [1,2,3,100,200,300,400,4,5]
    nums.splice(3,4) // [1,2,3,4,5]

// Putting elements in order
  // (.reverse)
    var nums = [1,2,3]
    nums.reverse() // [3,2,1]

  // (.sort) (works with strings well alone)
    var names = ["David", "Brian", "Clayton"]
    names.sort() // ["Brian", "Clayton", "David"]

  // (.sort) (with numbers)
    function compare(num1, num2) {
      return num1 - num2
    }
    var nums = [3,1,2,100,4,200]
    nums.sort(compare) // [1,2,3,4,100,200]

// Iterator Functions (return same array)
// (.forEach)
  function square(num) {
    console.log(num, num * num);
  }
  var nums = [1, 2, 3, 4, 5]
  nums.forEach(square) // [1,4,9,16,25]

// (.every) (applies a boolean if every number satisfies)
  function isEven(num) {
    return num % 2 == 0
  }
  var nums = [2,4,6]
  var even = nums.every(isEven) // true

// (.some) (applies a boolean if SOME numbers satisfy)
  function isEven(num) {
    return num % 2 == 0
  }
  var nums = [2,4,5]
  var even = nums.every(isEven) // true

// (.reduce): applies a funciton to an accumulator and the successive elements of an array 
  // numbers
    function add(runningTotal, currentValue) {
      return runningTotal+currentValue;
    }
    var nums = [1,2,3,4,5,6]
    var sum = nums.reduce(add) // 21

  // strings
    function concat(accumulatedString, item) {
      return accumulatedString+item;
    }

    var words = ["the", "quick", "brown", "fox"]
    var sentence = words.reduce(concat) // "the quick brown fox"

// (.reduceRight)
  function concat(accumulatedString, item) {
    return accumulatedString + item;
  }
  var words = ["the", "quick", "brown", "fox"]
  var sentence = words.reduceRight(concat) // "fox brown quick the"

// Iterative Functions (return new array)
// (.map)
  // (numbers)
    function curve(grade) {
      return grade += 5;
    }

    var grades = [77, 65, 81, 92, 83]
    var newgrades = grades.map(curve) // [82, 70, 86, 97, 88]

  // (strings)
    function first(word) {
      return word[0]
    }

    var words = ["for", "your", "information"]
    var acroynum = words.map(first)
    console.log(acronym.join("")) // "fyi"

// (.filter)
  // (numbers)
    function isEven(num) {
      return num % 2 == 0;
    }

    var nums = []
    for (var i = 0; i < 20; i++) {
      nums[i] = i + 1;
    }
    var evens = nums.filter(isEven) // 2,4,6,8,10,12,14,16,18,20

  // (strings)
    function afterc(str) { // tests the "i before e except after c rule"
      if (str.indexOf("cie") > -1) {
        return true;
      }
      return false;
    }
    var words = ["receive", "deceive", "perceive", "deceit", "concieve"]
    var misspelled = words.filter(afterc) // "recieve, percieve, concieve"

// Two-Dimensional and Multidimensional Arrays: JavaScript arrays by nature are one dimensional, but you can create multidimensional arrays by creating arrays of arrays.
var grades =[[89, 77,78], [76,82,81], [91, 94, 89]]
console.log(grades[2][2]) // displays 89

// Processing Two-Dimensional Array Elements
  // column processing
    var grades =[[89, 77,78], [76,82,81], [91, 94, 89]]
    var total = 0
    var average = 0.0
    for (var row = 0; row < grades.length; row++) {
      for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
      }
      average = total / grades[row].length;
      console.log("student " + parseInt(row+1) + "average: " + average.toFixed(2))
      total = 0;
      average = 0.0;
    }

  // row processing
    var grades =[[89, 77,78], [76,82,81], [91, 94, 89]]
    var total = 0
    var average = 0.0
    for (var col = 0; col < grades.length; col++) {
      for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
      }
      average = total / grades[col].length;
      console.log("test " + parseInt(col+1) + "average: " + average.toFixed(2))
      total = 0;
      average = 0.0;
    }

// Jagged Arrays: array where the rows in the array may have a different number of elements. Javascript is good at handling because we can compute the length of any row.
    var grades =[[89, 77], [76,82,81], [91, 94, 89, 99]]
    var total = 0
    var average = 0.0
    for (var row = 0; row < grades.length; row++) {
      for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
      }
      average = total / grades[row].length;
      console.log("student " + parseInt(row+1) + "average: " + average.toFixed(2))
      total = 0;
      average = 0.0;
    }


// Arrays of Objects: can have functions stored inside the arrays
function Point(x, y) {
  this.x = x;
  this.y = y;
}

function displayPts(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].x + ", " + arr[i].y)
  }
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1, p2, p3, p4];

for (var i = 0; i < points.length; i++) {
  console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " + points[i].y)
}

var p5 = new Point(12, -3);
points.push(p5);
console.log("after push");
displayPts(points);
points.shift();
console.log('after shift');
displayPts(points)
