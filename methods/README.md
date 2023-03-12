<!-- The purpose of this document is to outline data structues and algorithsm, provide meaning to the terms and keep examples, which I will impliment as a module for software development purposes -->

<!-- Chapter 1 in Data Strucutures and Algorithms in JavaScript -->
while loop: execute until a condition is true
for loop: execute a specified number of times

scope (variable): refers to wherein a program a variables value can be accessed
  function scope: variables value is visible within the function definition where the variable is declared and defined and within any functions that are nested within that function
  function showScope() {
    var scope = 'local';
    return scope;
  }
  var scope = "global";
  console.log(scope); // displays "global"
  console.log(showScope()); // displays "local"

  global scope: variable defined outside of a funciton, in the main program
    KEY: if you leave out "var" when defining a variable, even within a function, it is global.
    function showScope() {
      return scope;
    }
    var scope = "global";
    console.log(scope); // displays "global"
    console.log(showScope()); // displays "global"

Functions: value-returning functions and functions that don't return values (sometimes called subprocedures or void functions). All function parameters in JavaScript are passed by value, and there are no reference parameters. However, there a reference objects, such as arrays which are passed to functions by reference (see non value returning below)
  value returning:
    function factorial(number) {
      var product = 1;
      for (var i = number; i >= 1: i--) {
        product *= i;
      }
      return product;
    }
    console.log(factorial(4)) // displays 24
    console.log(factorial(5)) // displays 120
    console.log(factorial(10)) // displays 3628800

  non value returning (subprocedure or void):
    function curve(arr, amount) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] += amount;
      }
    }
    var grades = [77, 73, 74, 81, 90];
    curve(grades, 5);
    console.log(grades); // displays [82, 78, 79, 86, 95]

Recursive function: results of the functions computation are temporarily suspended while the recursion is in progress.
  KEY: any function that uses recursion can be rewritten in an iterative manner.
  function factorial(number) {
    if (number == 1) {
      return number;
    } else {
      return number * factorial(number - 1)
    }
  }
  console.log(factorial(5))
  5 * factorial(4)
  5 * 4 * factorial(3)
  5 * 4 * 3 * factorial(2)
  5 * 4 * 3 * 2 * factorial(1)
  5 * 4 * 3 * 2 * 1
  5 * 4 * 3 * 2
  5 * 4 * 6
  5 * 24
  120 // answer

Objects and Object Oriented Programming: Javascript provides many different ways for creating and using objects. In this section we demonstrate the techniques used in this book for reating objects and for creating and using the object's function and properties. Objects are created by defining a constructor function that includes declarations for an object's properties and functions, followed by definitions for the functions. Below is an example for a checking account object.
  KEY: (this) keyword is used to tie each function and property to an object instance.
  function Checking(amount) {
    this.balance = amount; // property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString; // function
  }

  function deposit(amount) {
    this.balance += amount;
  }

  function withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('insufficient funds')
    }
  }

  function toString() {
    return "Balance: " + this.balance;
  }

  var account = new Checking(500);
  account.deposit(1000);
  console.log(account.toString()); // Balance: 1500
  account.withdraw(750);
  console.log(account.toString()); // Balance: 750
  account.withdraw(800); // "Insufficient Funds"
  console.log(account.toString()); // Balance: 750

<!-- Chapter 2 in Data Strucutures and Algorithms in JavaScript -->
Arrays: most common data structure in computer programming. Standardly defined as a "linear collection of elements, where the elements can be accessed via indices, which are usually integers used to compare offsets." In JavaScript, an array is actually a specialized type of Javascript object.
  Creating Arrays:
    var numbers = [];
    var numbers = new Array(); // uses array constructor instead

  Specialties of Javascript Arrays: data doesn't all have to be the same type
    var objects = [1, "Joe", true, null]
    console.log(Array.isArray(objects)) // prints true

  Creating Arrays from Strings (split method): breaks up the string at a common delimeter, such as a space for each word.
    var sentence = "the quick brown fox jumped over the lazy dog"
    var words = sentence.split(" ")
    console.log(words) // ["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

  Aggregate Arrays:
    assigning arrays to eachother:
      shallow(the new array is simply points to the original arrays elements):
        var nums = [1]
        var samenums = nums;
        nums[0] = 400;
        console.log(samenums[0])

      deep(each of the original arrays elements is actually copied to the new array's elements)
        function copy(arr1, arr2) {
          for (var i = 0; i< arr1.length; i++) {
            arr2[i] = arr1[i]
          }
        }

        var nums = []
        copy(nums, samenums)
        nums[0] = 400
        console.log(samenums[0]) // displays 1

  Accessor Functions: set of functions you can use to acccess the elements of an array.
    Search for a value (.indexOf) (returns -1 if not found and always returns first index):
      var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]
      var position = names.indexOf("David");
      console.log(position) // returns 0

    Search for a value (.lastIndexOf() returns -1 if not found always returns last index)

    String Representations (.join() and .toString()) (arrays to single string)
      var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]
      var namestr = names.join()
      console.log(namestr) // David,Cynthia,Raymond,Clayton,Mike,Jennifer
      var namestr = names.toString()
      console.log(namestr) // David,Cynthia,Raymond,Clayton,Mike,Jennifer

    Creating new Arrays from existing (.concat() and .splice())
      concat
        var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
        var dmpDept = ["Raymond", "Cynthia", "Bryan"]
        var itDiv = cisDept.concat(dmpDept)
        console.log(itDiv) // ["Mike", "Clayton", "Terrill", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"]
        itDiv = dmpDept.concat(cisDept)
        console.log(itDiv) // ["Raymond", "Cynthia", "Bryan", "Mike", "Clayton", "Terrill", "Danny", "Jennifer"]

      splice: creates a new array by adding new contents while removing existing
        .splice(starting_pos: number of elements)
        itDiv = ["Raymond", "Cynthia", "Bryan", "Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
        var newDept = itDiv.splice(3,3)
        console.log(newDept) // [Mike, Clayton, Terrill]

  Mutator Functions:
    Adding elements to end of array (.push())
      var nums = [1, 2, 3, 4, 5]
      nums.push(6)
      console.log(nums) // [1, 2, 3, 4, 5, 6]

    Adding elements to beginning of array (.unshift())
      var nums = [2,3,4]
      nums.unshift(1)
      console.log(nums) // [1, 2,3,4]

    Removing elements from an Array
      End (.pop)
        var nums = [1, 2, 3]
        nums.pop() // [1,2]

      Beginning (.shift)
        var nums = [9,1,2,3]
        nums.shift() // [1,2,3]

      Middle (.splice)
        var nums = [1,2,3,100,200,300,400,4,5]
        nums.splice(3,4) // [1,2,3,4,5]

    Putting elements in order
      (.reverse)
        var nums = [1,2,3]
        nums.reverse() // [3,2,1]

      (.sort) (works with strings well alone)
        var names = ["David", "Brian", "Clayton"]
        names.sort() // ["Brian", "Clayton", "David"]

      (.sort) (with numbers)
        function compare(num1, num2) {
          return num1 - num2
        }
        var nums = [3,1,2,100,4,200]
        nums.sort(compare) // [1,2,3,4,100,200]

  Iterator Functions (return same array)
    (.forEach)
      function square(num) {
        console.log(num, num * num);
      }
      var nums = [1, 2, 3, 4, 5]
      nums.forEach(square) // [1,4,9,16,25]

    (.every) (applies a boolean if every number satisfies)
      function isEven(num) {
        return num % 2 == 0
      }
      var nums = [2,4,6]
      var even = nums.every(isEven) // true

    (.some) (applies a boolean if SOME numbers satisfy)
      function isEven(num) {
        return num % 2 == 0
      }
      var nums = [2,4,5]
      var even = nums.every(isEven) // true

    (.reduce): applies a funciton to an accumulator and the successive elements of an array
      numbers
        funciton add(runningTotal, currentValue) {
          return runningTotal+currentValue;
        }
        var nums = [1,2,3,4,5,6]
        var sum = nums.reduce(add) // 21

      strings
        function concat(accumulatedString, item) {
          return accumulatedString+item;
        }

        var words = ["the", "quick", "brown", "fox"]
        var sentence = words.reduce(concat) // "the quick brown fox"

    (.reduceRight)
      function concat(accumulatedString, item) {
        return accumulatedString + item;
      }
      var words = ["the", "quick", "brown", "fox"]
      var sentence = words.reduceRight(concat) // "fox brown quick the"

  Iterative Functions (return new array)
    (.map)
      (numbers)
        function curve(grade) {
          return grade += 5;
        }

        var grades = [77, 65, 81, 92, 83]
        var newgrades = grades.map(curve) // [82, 70, 86, 97, 88]

      (strings)
        function first(word) {
          return word[0]
        }

        var words = ["for", "your", "information"]
        var acroynum = words.map(first)
        console.log(acronym.join("")) // "fyi"

    (.filter)
      (numbers)
        function isEven(num) {
          return num % 2 == 0;
        }

        var nums = []
        for (var i = 0; i < 20; i++) {
          nums[i] = i + 1;
        }
        var evens = nums.filter(isEven) // 2,4,6,8,10,12,14,16,18,20

      (strings)
        function afterc(str) { // tests the "i before e except after c rule"
          if (str.indexOf("cie") > -1) {
            return true;
          }
          return false;
        }
        var words = ["receive", "deceive", "perceive", "deceit", "concieve"]
        var misspelled = words.filter(afterc) // "recieve, percieve, concieve"

  Two-Dimensional and Multidimensional Arrays: JavaScript arrays by nature are one dimensional, but you can create multidimensional arrays by creating arrays of arrays.
    var grades =[[89, 77,78], [76,82,81], [91, 94, 89]]
    console.log(grades[2][2]) // displays 89

    Processing Two-Dimensional Array Elements
      column processing
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
        Output: Student 1 average: 81.33
                Student 2 average: 79.67
                Student 3 average: 91.33

      row processing
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
        Output: test 1 average: 85.33
                test 2 average: 84.33
                test 3 average: 82.67

    Jagged Arrays: array where the rows in the array may have a different number of elements. Javascript is good at handling because we can compute the length of any row.
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
        Output: Student 1 average: 83.00
                Student 2 average: 79.67
                Student 3 average: 93.25

  Arrays of Objects: can have functions stored inside the arrays
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

    Output:
      Point 1: 1, 2
      Point 2: 3, 5
      Point 3: 2, 8
      Point 4: 4, 4
      after push
      1, 2
      3, 5
      2, 8
      4, 4
      12, -3
      after shift
      3, 5
      2, 8
      4, 4
      12, -3

  Arrays in Objects: common to use arrays to store complex data in an object. Many data structures are implemented as class objects with an underlying array used to store data. Example below is for storing weekly highs.
    function weekTemps() {
      this.dataStore = [];
      this.add = add;
      this.average = average;
    }

    function add(temp) {
      this.dataStore.push(temp);
    }

    function average() {
      var total = 0;
      for (var i = 0; i < this.dataStore.length; i++) {
        total += this.dataStore[i];
      }
      return total / this.dataStore.length;
    }

    var thisWeek = new weekTemps();
    thisWeek.add(52);
    thisWeek.add(55);
    thisWeek.add(61);
    thisWeek.add(65);
    thisWeek.add(55);
    thisWeek.add(50);
    thisWeek.add(52);
    thisWeek.add(49);
    console.log(thisWeek.average()) // displays 54.875

<!-- Chapter 3 in Data Structures in Algorithms Lists -->
  List ADT (Abstract Data Type): creates a class. Each item stored in a list is called an element. In JavaScript, lists can be of any data type.

  List properties and functions:
    listSize(property): number of elements in list
    pos(property): current position in a list
    length(property): returns the number of elements in a list
    clear(function): clears all elements from list
    toString(function): returns string representation of list
    getElement(function): returns element at current position
    insert(function): inserts new element after existing element
    append(function): adds new element to end of list
    remove(function): removes element from list
    front(function): sets current position to first element of list
    end(function): sets current position to last element of list
    previous(function): returns previous element
    next(function): returns next element
    hasPrevious(function): tests if previous element exists
    hasNext(function): tests if next element exists
    currPos(function): returns the current position in the list
    moveTo(function): moves the current position to the specified position

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

<!-- Chapter 4 in Data Structures and Algorithms Stacks -->
  Stack Operations: stack is a list of elements that are accessible only from one end of the list, which is called the top. Stack is known as a last-in, first-out (LIFO) data structure. Because of the last in, first-out nature of the stack, any element that is not currently at the top of the stack cannot be accessed, you have to dispose of the elements above it first.

  Two Primary Operations:
    Adding elements to a stack (push)
    Removing elements from a stack (pop)

  Viewing data at the top: use a "top" variable and increment it every time we push new elements onto the stack and decrement when we pop elements off the stack.

  Stack Implimentation:
    // Stack Class
      function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.clear = clear;
        this.length = length;
      }

      // push function.. when we push we have to push a new element onto a stack, we have to store it in the top position and
      // increment the top variable so that the new top is the next empty position in the array.
      function push(element) {
        this.dataStore[this.top++] = element;
      }

      // pop returns the element at the top of the stack and decreases the top element
      function pop() {
        return this.dataStore[--this.top];
      }

      // peek function returns the top element of the stack by accessing the element at the top-1 position of the array
      // if you call peek on an empty array, it returns undefined
      function peek() {
        return this.dataStore[this.top-1]
      }

      // length function returns the top value
      function length() {
        return this.top;
      }

      // clear a stack by setting the top variable back to zero and setting the dataStores length to 0
      function clear() {
        this.top = 0;
        this.dataStore.length = 0;
      }

      var s = new Stack();
      s.push("david");
      s.push('raymond');
      s.push('Bryan');
      console.log("length:" + s.length());
      console.log(s.peek());
      var popped = s.pop()
      console.log("the popped element is " + popped);
      console.log(s.peek());
      s.push("Cynthia");
      console.log(s.peek());
      s.clear();
      console.log("length: " + s.length());
      console.log(s.peek());
      s.push("Clayton");
      console.log(s.peek())

      Output:
        length:3
        Bryan
        the popped element is Bryan
        raymond
        Cynthia
        length: 0
        undefined
        Clayton

  Using the Stack Class:
    Multiple Base Conversions (only works with converting a number to any of the bases 2 through 9): stack can be used to convert a number from one base to another base. Given a number, n, which we want to convert to a base, b, there is an algorithm for performing the conversion.
    STEPS:
      1. The rightmost digit of n is n % b. Push this digit onto the stack.
      2. Replace n with n/b.
      3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
      4. Build the converted number string by popping the stack until the stack is empty.

    Example with converting numbers with base 2 and base 8.
      function mulBase(num, base) {
        var s = new Stack();
        do {
          s.push(num % base);
          num = Math.floor(num /= base);
        } while (num > 0);
        var converted = "";
        while (s.length() > 0) {
          converted += s.pop();
        }
        return converted;
      }

      var num = 32;
      var base = 2;
      var newNum = mulBase(num, base);
      console.log(num + "converted to base" + base + "is" + newNum);
      num = 125;
      base = 8;
      var newNum = mulBase(num, base);
      console.log(num + "converted to base" + base + "is" + newNum);

      OUTPUT:
        32 converted to base 2 is 100000
        125 converted to base 8 is 175

    Palindromes: a word, phrase or number that is spelled the same forward and backwards (i.e. dad or 1001)
      function isPalendrome(word) {
        var s = new Stack();
        for (var i = 0; i < word.length; i++) {
          s.push(word[i]);
        }
        var rword = " ";
        while (s.length() > 0) {
          rword += s.pop();
        }
        if (word == rword) {
          return true;
        } else {
          return false;
        }
      }

      var word = 'hello';
      if (isPalendrome(word)) {
        console.log(word + "is a palindrome");
      } else {
        console.log(word + "is not a palindrome");
      }

      var word = 'racecar';
      if (isPalendrome(word)) {
        console.log(word + "is a palindrome");
      } else {
        console.log(word + "is not a palindrome");
      }

      OUTPUT:
       hello is not a palindrome
       racecar is a palindrome

    Recursion: stacks are good for implimenting recursion
      Factorial Example (non stack method):
        function factorial(n) {
          if (n===0) {
            return 1;
          } else {
            return n * factorial (n-1)
          }
        }

      Factorial Example (stack method):
        function fact(n) {
          var s = new Stack();
          while (n > 1) {
            s.push(n--)
          }
          var product = 1;
          while (s.length() > 0) {
            prodcut *= s.pop();
          }
          return product;
        }

      console.log(factorial(5)) returns 120
      console.log(fact(5)) // returns 120

<!-- Chapter 5 in Data Structures and Algorithms Queue -->
  Queue: type of list where data are inserted at the end and are removed from the front. Example of First-In, First Out (FIFO) data strucutre. Good example of a queue is to model scenarios such as customers standing in the line at a bank or a grocery store.
    Queue Operations:
      enqueue: insertion operation
      dequeue: removal operation
      peek: views element at the front of the queue
      length: finds how many are in the queue
      clear: remove all

    Array-Based Queue Class Implementation: good method in Javascript because it has push() method and shift()
      EX:
        names = [];
        names.push("Cynthia")
        names.push("Jennifer")
        console.log(names) // Cynthia, Jennifer
        names.shift(); // removes element at the front of the array
        console.log(names) // jennifer

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

      Output:
        Meredith
        Cynthia
        Jennifer

        Cynthia
        Jennifer

        front of queue: Cynthia
        back of queue: Jennifer

    Sorting Data with Queues:
      Radix Sort:
        function distribute(nums, queues, n, digit) {
          for (var i = 0; i < n; i++) {
            if (digit == 1) {
              queues[nums[i]%10].enqueue(nums[i]);
            } else {
              queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
            }
          }
        }

        function collect(queues, nums) {
          var i = 0;
          for (var digit = 0; digit < 10; digit++) {
            while (!queues[digit].empty()) {
              nums[i++] = queues[digit].dequeue();
            }
          }
        }

        function dispArray(arr) {
          for (var i = 0; i < arr.length; i++) {
            putstr(arr[i] + " ");
          }
        }

        var queues = [];
        for (var i = 0; i < 10; i++) {
          queues[i] = new Queue;
        }
        var nums = [];
        for (var i = 0; i < 10; i++) {
          nums[i] = Math.floor(Math.floor(Math.random() * 101));
        }
        console.log("before radix sort")
        dispArray(nums);
        distribute(nums, queues, 10, 1)
        collect(queues, nums)
        distribute(nums. queues, 10, 10)
        collect(queues, nums)
        console.log("\n\nAfter radix sort: ");
        dispArray(nums);

        // Before radix sort:
        // 45 72 93 51 21 16 70 41 27 31

        // After radix sort:
        // 16 21 27 31 41 45 51 70 72 93

        // Before radix sort:
        // 76 77 15 84 79 71 69 99 6 54

        // After radix sort:
        // 6 15 54 69 71 76 77 79 84 99

    Priority Queues: elements sometimes need to be removed in an order other than first out, first in
      Emergency Department Example:
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

<!-- Chapter 6 of Data Structures and Algorithms Linked Lists -->
  Shortcomings of Arrays: In many languages, arrays are fixed in length, which makes adding and removing data difficult. Javascript arrays are good because of the split() function without having to perform addtional array element accesses. The main problem with JavaScript arrays is that they are implimented as objects, causing them to be less effective.

  Linked Lists: collection of objects called nodes. Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link.
    Ex: milk -> bread -> eggs -> bacon -> null

    While array elements are referenced by their position, linked list elements are referenced by their relationship to the other elements in the linked list. We mark the end of the linked list with the "null" node. We mark the beginning of a linked list with the "head" node.

    Object Based Linked List Design:
      The Node Class: consists of two properties (element), which stores the nodes data and next, which stores a link to the next node in the linked list.
        function Node(element) {
          this.element = element;
          this.next = null;
        }

      The Linked List Class: provides the functionality for a linked list.
        Constructor:
          function LList() {
            this.head = new Node("head");
            this.find = find;
            this.insert = insert;
            this.remove = remove;
            this.display = display;
            this.findPrevious = findPrevious;
            this.remove = remove;
          }

        Inserting new nodes: insert() to insert a new node, you have to specify which node you want to insert the new node before or after. You have to user a helper function to find() the node first.
          Find function: create a new node and assign it as the head node, then we loop through the list moving from one node to the next when the value of the current node's element property is not equal to the data we are searching for. If the search is successful, the function returns the node storing the data. If the data is not found, the function returns "null"
            function find(item) {
              var currNode = this.head;
              while (currNode.element != item) {
                currNode = currNode.next
              }
              return currNode;
            }

          insert() function: once the "after" node is found, the new node is inserted. First, the new node's "next" property is set to the value of the "next" property of the "after" node. Then the "after" node's "next" property is set to reference to the new node.
            function insert(newElement, item) {
              var newNode = new Node(newElement);
              var current = this.find(item);
              newNode.next = current.next;
              current.next = newNode;
            }

          display() function: allows viewing of elements of a linked list
            function display() {
              var currNode = this.head;
              while(!(currNode.next) === null)) {
                console.log(currNode.next.element);
                currNode = currNode.next;
              }
            }

          var cities = new LList();
          cities.insert("Conway", "head")
          cities.insert("Russellville", "Conway")
          cities.insert("Alma", "Russellville")
          cities.display(); // displays Conway, Russelville, Alma

        Removing Nodes from a Linked List: have to find the node that is just before the node we want to remove. Once we find the node, we change its "next" property to no longer reference the removed node, and the previous node is modified to point to the node after the removed node.
          findPrevious(): function traverses the linked list, stopping at each node to see if the next node stores the data that is to be removed. When the data is found the function returns this node (the "previous" node), so that its "next" property can be modified.
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
            cities.insert("Conway", "head");
            cities.insert("Russellville", "Conway");
            cities.insert("Carlisle", "Russellville");
            cities.insert("Alma", "Carlisle");
            cities.display();
            console.log()
            cities.remove("Carlisle");
            cities.display();

            Output:
              before removal:
                Conway
                Russellville
                Carlisle
                Alma

              after removal
                Conway
                Russellville
                Alma

  Doubly Linked Lists: gain efficiency vs a single linked list for removal purposes because we no longer have to search for the node.
    function Node(element) {
      this.element = element;
      this.next = null;
      this.previous = null;
    }

    // insert() similar to single but we have to assign previous() property to point to the previous node
      function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
      }

    // remove()
      function remove(item) {
        var currNode = this.find(item);
        if(!(currNode.next === null)) {
          currNode.previous.next = currNode.next;
          currNode.next.previous = currNode.previous;
          currNode.next = null;
          currNode.previous = null;
        }
      }

    // findLast() used to display linked lists in reverse order by finding the last node in a linked list. Then displayReverse() can be called
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

      var cities = new LList();
      cities.insert("Conway", "head");
      cities.insert("Russellville", "Conway");
      cities.insert("Carlisle", "Russellville");
      cities.insert("Alma", "Carlisle");
      cities.display();
      console.log()
      cities.remove("Carlisle");
      cities.display();
      console.log();
      cities.displayReverse();

      Output:
          Conway
          Russellville
          Carlisle
          Alma

          Conway
          Russellville
          Alma

          Alma
          Russellville
          Conway

  Circularly Linked Lists: similar to singular linked lists. Except its head nodes "next" property points back to itself (head.next = head). Every new node has its "next" property pointing to the head of the list. This is why it's circular in nature. The reason you would create this is to move backward through a linked list without having to define the doubly part.
    Constructor:
      function LList() {
        this.head = new Node("head");
        this.head.next = this.head;
        this.find = find;
        this.insert = insert;
        this.display = display;
        this.findPrevious = findPrevious;
        this.remove = remove;
      }

      function display() {
        var currNode = this.head();
        while(!(currNode.next === null) && !(currNode.next.element == "head")) {
          console.log(currNode.next.element);
          currNode = currNode.next;
        }
      }

  Other Linked Lists Functions:
    advance(n): Advances n nodes in the linked list
    back(n): Moves n nodes backward in a doublyl linked list
    show(n): displays the current node only

<!-- Chapter 7 in Data Structures and Algorithms Dictionaries -->
  Dictionaries: data strucutre that stores data as key-value pairs. The JavaScript "Object" class is designed to operate as a dictionary. Creating a "Dictionary" class makes doing the work easier and more fun. It's a lot easier to use "()" to reference keys rather than having to use "[]" notation. There is also a big advantage of being able to define functions for performing collective operations, such as displaying all entries in a dictionary, rather than having to write loops in the main program to perform the same operations.

    Dictionary Class: the basis of this class is an Object, but using Array access notation, since objects in Javascript are associative arrays. This allows us to dynamically add key value pairs, and use Array functionality such as sorting, but at the same time, allowing us to have string keys rather than just numeric.
      // Class function
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

      var pbook = new Dictionary();
      pbook.add("Mike", "123")
      pbook.add("David", "456")
      pbook.add("Cynthia", "789")
      console.log("Davids extension: " + pbook.find("David"));
      pbook.remove("David");
      pbook.showAll();

      Output:
        David's extension: 345
        Mike -> 123
        Cynthia -> 456

    Auxilary Functions:
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

      var pbook = new Dictionary();
      pbook.add("Raymond", "123")
      pbook.add("David", "345")
      pbook.add("Cynthia", "456")
      console.log("Number of entries: " + pbook.count());
      console.log("Davids extension: " + pbook.find("David"));
      pbook.showAll();
      pbook.clear();
      console.log("Number of entries: " + pbook.count());

      Output:
        Number of entries: 3
        David's extension: 345
        Raymond -> 123
        David -> 345
        Cynthia -> 456
        Number of entries: 0

    Adding Sorting to the Dictionary Class
      Ex:
        var a = [];
        a[0] = "Mike";
        a[1] = "David";
        console.log(a) // Mike, David
        a.sort()
        console.log(a) // David, Mike

      Using Object.keys() to sort keys:
        function showAll() {
          var keys = Object.keys(this.datastore);
          keys.sort()
          for (var i = 0; i < keys.length; i++) {
            console.log(keys[i] + " -> " + this.datastore[keys[i]]);
          }
        }

      var pbook = new Dictionary;
      pbook.add("Raymond", "123");
      pbook.add("David", "345");
      pbook.add("Cynthia", "456");
      pbook.add("Mike", "723");
      pbook.add("Jennifer", "987");
      pbook.add("Danny", "012");
      pbook.add("Jonathan", "666");
      pbook.showAll()

      Output:
        Cynthia -> 456
        Danny -> 012
        David -> 345
        Jennifer -> 987
        Jonathan -> 666
        Mike -> 723
        Raymond -> 123

<!-- Chapter 8 Data Strucutres and Algorithms Hashing -->
  Hashing: common technique for storing data in such a way that the data can be inserted and retrieved quickly. Uses a "has table". Although it's fast for insertion, deletion and retrieval, they perform poorly for operations that involve searching, such as finding the minimum and maximum values in a data set. For these operations, other data strcuutres such as the binary search tree are more appropriate.

  Hash-Table data strucutre is designed around an array. Each data element is stored in the array based on an associated data element called the key, which is similar to the concept of the key with the dictionary data structure. to store a piece of data in a hash table, the key is mapped into a number in the range of 0 through the hash table size, using a hash function. Ideally, ht ehash function stores each key in its own array element. It's good practice to try and distribute the keys as evenly as possible among the elements of the array. It's possible for two keys to hash(the result of the hash function) to the same value. This is called a collision. There are strategies to handle this. The last thing we have to determine is how large an array to create. it should be a prime number.

  Hash functions:
    hashmap.size() // returns # of elements
    hashmap.get(<key>) // returns the value of the element of the given key
    hashmap.has(<key>) // checks to see if the hashmap contains the key that is passed as an argument
    hashmap.set(<key>, <value>) // takes 2 arguments and creates a new element in the hashmap
    hashmap.delete(<key>) // deletes the key/value pair that matches the key that is passed in as an argument
    hashmap.clear() // clears all elements from the hashmap

    If you're dealing with functions that require counting with maps. Increment the value of the key every time if the key already exists and then add the value to the count.
  Hash Table Class (Simple Hash not great):
    Constructor:
      function HashTable() {
        this.table = newArray(137);
        this.simpleHash = simpleHash;
        this.betterHash = betterHash;
        this.showDistro = showDistro;
        this.values = [];
        this.put = put;
        this.get = get;
      }

    Choosing a Hash Function: depends on the data type of the key.
      Integer: simplest hash function is to return the key modulo the size of the array. Not recommended when all keys end in 0 and the array size is 10 (which is why the array size should be a prime number). If the keys are random integers, then the hash functino should more evenly distribute the keys, known as "modular hashing".

      Strings: tougher than integers. Smart to sum the ASCII value of the letters in the key. The hash value is then that sum modulo the array size.

      // simple hash function
        function simpleHash(data) {
          var total = 0;
          for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
          }
          return total % this.table.length;
        }

      // put function
        function put(data) {
          var pos = this.simpleHash(data);
          this.table[pos] = data;
        }

      function showDistro() {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
          if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i])
          }
        }
      }

      var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
      var hTable = new HashTable()
      for (var i = 0; i < someNames.length; i++) {
        hTable.put(someNames[i]);
      }
      hTable.showDistro();

      Output:
        35: Cynthia
        45: Clayton
        57: Donnie
        77: David
        95: Danny
        116: Mike
        132 Jennifer
        134: Jonathan

      PROBLEM: The strings "Clayton" and "Raymond" hash to the same value, causing a collision. Because of the collision, only Clayton is stored in the hash table.

  Better Hash Function (use this over simple to avoid collisions): this methods is used to avoid hashing collisions by computing a better hash value (Horner's method). This works by summing the ASCII values of the characters of a string, but multiplies by a prime constant (31 has been found to work great).
    // better hash function
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

    // put function
      function put(data) {
        var pos = this.betterHash(data);
        this.table[pos] = data;
      }

    var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
    var hTable = new HashTable()
    for (var i = 0; i < someNames.length; i++) {
      hTable.put(someNames[i]);
    }
    hTable.showDistro();

    Output:
      3: David
      25: Raymond
      37: Donnie
      61: Jonathan
      75: Danny
      82: Mike
      102: Jennifer
      130: Clayton
      131: Cynthia

    This works great and avoids collisions!

  Hashing Integer Keys: This example is for working with student grades. The key is a nine-digit student identification number, which we will gernate randomly, along with the students grade.

    // get random int function.. allows us to specify a min and max random number (50, 100)
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max-min+1)) + min;
    }

    // generates student data. First loop generates the student ID number, and then a random grade is generated and concatenated to the student number.
    function getStuData(arr) {
      for (var i = 0; i < arr.length; i++) {
        var num = " ";
        for (var j = 1; j<=9; j++) {
          num += Math.floor(Math.random()*10)
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
      }
    }

  Storing and Retrieving Data in a Hash Table
    // modify put function to input data too
    // function hashes the key and then stores the data in the position of the table computed by the hash function
    function put(key, data) {
      var pos = this.betterHash(key);
      this.table[pos] = data;
    }

    // get function to get data out of table
    function get (key) {
      return this.table[this.betterHash(key)];
    }

  Handling Collisions: occurs ehn a hash function generates the same key for two or more values. The second part of a hash algorithm involves resolving collisions so that all keys are stored in the hash table.
    Separate Chaining: each array element of a hash table stores another data structure, such as another array, which is then used to store keys. If two keys generate the same hash value, each key can be stored in a different position of the secondary array. After the array is created to store the hashed keys, we call a function that assigns an empty array to each element of the hash table. This creates a two dimensional array.

      buildChains(): creates the second array (referred to as a "chain")
        function buildChains() {
          for (var i = 0; i < this.table.length; i++) {
            this.table[i] = []
          }
        }

      showDistro(): modify to allow for multidimensional array
        function showDistro() {
          var n = 0;
          for (var i = 0; i < this.table.length; i++) {
            if (this.table[i][0] !== undefined) {
              console.log(i + ": " + this.table[i])
            }
          }
        }

      // this put function tries to hash the key and store it in the first cell. If the cell is taken it searches for the first open cell and puts the data there.
        function put(data) {
          var key = this.betterHash(data);
          var index = 0;
          if (this.table[key][index] == undefined) {
            this.table[key][index] = data;
          } else {
            while (this.table[key][index] !== undefined) {
              index++;
            }
            this.table[key][index] = data;
          }
        }

      // this get function starts by hashing the key to get the position of the key in the hash table. Then the function searches the cells until it finds the key it is looking for. When it finds the correct key, it returns the data from the adjacent cell to the keys cell. If the key isn't found, it returns undefined.
        function get(key) {
          var index = 0;
          var pos = this.betterHash(key);
          if (this.table[pos][index] == key) {
            return this.table[pos][index+1];
          } else {
            while (this.table[pos][index] != key) {
              index += 2;
            }
            return this.table[pos][index+1]
          }
          return undefined;
        }

        var hTable = new HashTable()
        hTable.buildChains();
        var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
        for (var i = 0; i < someNames.length; i++) {
          hTable.put(someNames[i]);
        }
        for (var i = 0; i < someNames.length; i++) {
          hTable.put(someNames[i]);
        }
        hTable.showDistro();

        Output:
          3: David, David
          25: Raymond, Raymond
          37: Donnie, Donnie
          61: Jonathan, Jonathan
          75: Danny, Danny
          82: Mike, Mike
          102: Jennifer, Jennifer
          130: Clayton, Clayton
          131: Cynthia, Cynthia

    Linear Probing: more general hashing technique called "open addressing hashing". Simply looks to see if next element of the hash table is empty when a collision occurs. When an array is large, LINEAR PROBING is the correct method.
      Deciding which to use:
        separate chaining: if the size of the array can be up to half the number of elements to be stored, you should use separate chaining.

        linear probing: if the size of the array can be twice the size of the number of elements to be stored, you should use linear probing.

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

          // begins searching the hash table at the hashed position of the key. If the data passed to the function matches the key found at that position, the corresponding data in the values position is returned. If the keys don't match, the function loops through the hash table until it either finds the key or reaches a cell that is undefined, meaning the key was never placed into the hash table
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

<!-- Chapter 9 of Data Structures and Algorithms Sets -->
  Set: collection of unique elements. These elements are called members.
    Important Properties:
      1. the memebers of a set are unordered
      2. no member can occur in a set more than once

    Definitions:
      empty set: set containing no members
      equal: two sets contain exactly the same members
      subset: all memebers of the first set are contained in the second set

    Operations:
      1. Union: a new is obtained by combining the members of one set with the members of another set
      2. Intersection:  anew set is obtained by adding all the members of one set that also exist in a second set
      3. Difference: a new set is obtained by adding all the memebers of one set except those that also exist in the second set

    Class Implementation: built around an array for storing the data.
      // constructor
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

      // remove function. first check to see if the requested data is in the array. If it is, we cal the splice function to remove it and return true. If it's not there, return false.
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

      // subset function: first checks to make sure that the proposed subset's length is less than the larger set we are comparing with the subset. If the subset length is greater than the original set, then it cannot be a subset. If subset is smaller, the function checks to see that each member of the subset is a member of a larger set. If any member of the subset is not in the larger set, the function returns false. If the function gets to the end of the larger set wihout returning false, the subset is indeed a subset and the function returns true.
        function subset(set) {
          if (this.size() > set.size()) {
            return false;
          } else {
            for each (var member in this.dataStore) {
              if (!set.containers(member)) {
                return false
              }
            }
          }
          return true;
        }

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

<!-- Chapter 10 in Data Structures and Algorithms Binary Trees and Binary Search Trees -->
  Trees: commonly used data structure in computer science. Non linear data structure used to store data in a herarchical manner. Examples include files in a file system or storing sorted lists of data. Binary trees are chosen over more primary data structures because you can search a binary tree very quickly (as opposed to a link list) and you can quickly insert and delete data from a binary tree (as opposed to an array). A tree is made up of a set of nodes connected by edges (example is an org shot). each box is a node and the lines connecting the boxes are edges. The nodes represent the positions that make up an organization, and the edges represent the relationships between those positions.
    root node: top node of a tree.
    parent node: If a node is connected to other nodes below it, the preceding node is called the parent node
    child nodes (referred to as "left" and "right"): nodes following the parent node A node cna have zero, one or more child nodes connected to it
    leaf node: a node without any children

    Binary Trees: restrict the number of child nodes to no more than two.
      Path: the series of edges you follow to get from one node to another node.
      Tree traversal: visiting all the nodes in a tree in some particular order
      levels: tree can be broken into levels. The root node is at level 0, it's children at 1, and their children at level 2 and so on.
      subtree: consists of the root node's chilren, it's children's children and so on.
      key value: each node in a tree has a value associated with it
      child nodes: referred to as "left" and "right"

      Binary Search Tree: binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes
        // Node class
          function Node(data, left, right) {
            this.data = data;
            this.count = 1;
            this.left = left;
            this.right = right;
            this.show = show;
          }

        // show function
          function show() {
            return this.data;
          }

        // insert function: adds new nodes to the tree.
          1. Set the root node to the current node
          2. If the data value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
          3. If the value of the left child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
          4. Set the current node to be the right child of the current node.
          5. If the value of the right child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
          function insert(data) {
            var n = new Node(data, null, null);
            if (this.root === null) {
              this.root = n;
            } else {
              var current = this.root;
              var parent;
              while (true) {
                parent = current;
                if (data < current.data) {
                  current = current.left;
                  if (current === null) {
                    parent.left = n
                    break;
                  }
                } else {
                  current = current.right;
                  if (current === null) {
                    parent.right = n;
                    break;
                  }
                }
              }
            }
          }

        // BST class
          function BST() {
            this.root = null;
            this.insert = insert;
            this.inOrder = inOrder;
            this.preOrder = preOrder;
            this.postOrder = postOrder;
            this.find = find;
            this.getMin = getMin;
            this.getMax = getMax;
            this.find = find;
          }

        // Traversing a Binary search Tree
          Three functions:
            1. inorder (best written using recursion): visits all of the nodes of a BST in ascending order of the node key values
              function inOrder(node) {
                if (node !== null) {
                  inOrder(node.left)
                  putstr(node.show() + " ")
                  inOrder(node.right)
                }
              }
              var nums = new BST();
              nums.insert(23);
              nums.insert(45);
              nums.insert(16);
              nums.insert(37);
              nums.insert(3);
              nums.insert(99);
              nums.insert(22);
              console.log("Inorder traversal: ");
              nums.inOrder(nums.root);

              Output:
                Inorder traversal: 3 16 22 23 37 45 99

            2. preorder: visits the root node first, followed by the nodes in the subtrees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node.
              function preOrder(node) {
                if (node !== null) {
                  putstr(node.show() + " ")
                  preOrder(node.left)
                  preOrder(node.right)
                }
              }
              // output: preOrder traversal: 23 16 3 22 45 37 99
            3. postorder: visits all of the child nodes of the left subtree up to the root node and then visits all of the child nodes of the right subtree up to the root node.
              function postOrder(node) {
                if (node !=== null) {
                  postOrder(node.left);
                  postOrder(node.right);
                  putstr(node.show() + " ")
                }
              }
              Output: Postorder traversal: 3 22 16 37 99 45 23

        Binary Search Tree Searches:
          1. Searching for a specific value: requires that a comparison be made between the data stored in the current node and the value being searched for. The comparision will determine if the search travels to the left child node, or to the right child node if the current node doesn't store the searched-for value.
            function find(data) {
              var current = this.root;
              while (current && current.data != data) {
                if (data < current.data) {
                  current = current.left;
                } else {
                  current = current.right;
                }
              }
              return current;
            }

          2. Searching for the minimum value (travels down the left link of each node in the BST until it reaches the end of the BST (current.left = null))
            function getMin() {
              var current = this.root;
              while (current.left !== null) {
                current = current.left
              }
              retrun current.data
            }

          3. Searching for the maximum value
            function getMax() {
              var current = this.root;
              while(current.right !== null) {
                current = current.right;
              }
              return current.data;
            }

            var nums = new BST();
            nums.insert(23);
            nums.insert(45);
            nums.insert(16);
            nums.insert(37);
            nums.insert(3);
            nums.insert(99);
            nums.insert(22);
            var min = nums.getMin();
            console.log("the minimum value of the BST is " + min)
            var max = nums.getMax();
            console.log("the maximum value of the BST is " + max)
            Output:
              The minimum value of the BST is: 3
              The maximum value of the BST is: 99

        Removing Nodes from a BST: the most complex operation. removing a node with no children is fairly simple. To aid, we define two functions
          1. remove()
            function remove(data) {
              root = removeNode(this.root, data)
            }
          2. removeNode()
            function removeNode(node, data) {
              if (node === null) {
                retrun null;
              }
              if (data === node.data) {
                // node has no children
                if(node.left === null && node.right === null) {
                  return null;
                }
                //node has no left child
                if (node.left === null) {
                  return node.right;
                }
                // node has no right child
                if (node.right === null) {
                  retrun node.left;
                }
                // node has two children
                var tempNode = getSmallest(node.right);
                node.data = tempNode.data;
                node.right = this.removeNode(node.right, tempNode.data);
                return node;
              } else if (data <node.data) {
                node.left = this.removeNode(node.left, data);
                return node;
              } else {
                node.right = this.removeNode(node.right, data);
                return node;
              }
            }

            // getSmallest() helper function
              function getSmallest(node) {
                if (node.left == null) {
                  return node;
                } else {
                  return getSmallest(node.left)
                }
              }

        Counting Occurrences:
          // update function:
            function update(data) {
              var grade = this.find(data);
              grade.count++
              retrun grade;
            }

<!-- Chapter 11 in Data Structures and Algorithms: Graphs and Graph Algorithms -->


<!-- Chapter 12 in Data Structures and Algorithms: Sorting Algorithms -->
  Sorting Algorithms: array based
    Array test bed class for sorting:
      function CArray(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
        this.insert = insert;
        this.toString = toString;
        this.clear = clear;
        this.setData = setData;
        this.swap = swap;
        this.bubbleSort = bubbleSort;
        this.selectionSort = selectionSort;
        this.insertionSort = insertionSort;

        for (var i = 0; i < this.numElements; i++) {
          this.dataStore[i] = i;
        }
      }

      function setData() {
        for (var i = 0; i < numelements; ++i) {
          this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
      }

      function clear() {
        for (var i = 0; i < this.dataStore.length; i++) {
          this.dataStore[i] = 0;
        }
      }

      function insert(element) {
        this.dataStore[this.pos++] = element;
      }

      function toString() {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
          retstr += this.dataStore[i] + " ";
          if (i > 0 && i % 10 == 0) {
            retstr += \n
          }
        }
        return retstr;
      }

      function swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2]
        arr[index2] = temp;
      }

    Basic Sorting Algorithms:
      Bubble Sort: one of the slowest sorting algorithms, but easy to implement
        function bubbleSort() {
          var numElements = this.dataStore.length;
          var temp;
          for (var outer = numElements; out >= 2; --outer) {
            for (var inner = 0; inner <= outer-1; ++inner) {
              if (this.dataStore[inner] > this.dataStore[inner+1]) {
                swap(this.dataStore, inner, inner+1)
              }
            }
            console.log(this.toString())
          }

        }
      Selection Sort: starts at the beginning of the array and comparing the first element with the remaining elements. After examining all of the elements, the smallest element is placed in the first position of ht earray and the algorithm moves to the second position. This process continues until the algorithm arrives at the next to last position in the array, at which point all the data is sorted.
        function selectionSort() {
          var min,temp;
          for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length -1; ++inner) {
              if (this.dataSore[inner] < this.dataStore[min]) {
                min = inner;
              }
            }
            swap(this.dataStore, outer, min)
            console.log(this.toString())
          }
        }
      Insertion Sort (fastest out of bubble and selection): Has to tloops. The outer loop moves element by elment through the array, while the inner loop compares the element chosen in the outer loop to the element next to it in the array. If the leement selected by the outer loop is less than the element selected by the inner loop, array elements are shifted over to the right to make room for the inner-loop element, just as described in the previous name card example.
        function insertionSort() {
          var temp, inner;
          for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
              this.dataStore[inner] = this.dataStore[inner-1];
              --inner;
            }
            this.dataStore[inner] = temp;
            console.log(this.toString());
          }
        }

    Advanced Sorting Algorithms (start on page 174):
      Shellsort:
      Mergesort:
      Quicksort:

<!-- Chapter 13 in Data Structures and Algorithms: Searching Algorithms -->
  Searching algorithms (used for items in a list):
    1. sequential search: used when the items in a list are in random order
      function seqSearch(arr, data) { // returns where it's found or if not(-1)
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] == data) {
            return i;
          }
        }
        return -1;
      }

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


    2. binary search (more efficient but you do have to take time to sort the data before using it): used when items in a list are in sorted order
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
      value to search for: 66
      current midpoint: 49
      current midpoint: 74
      current midpoint: 61
      Found 66 at position 61

      Counting Multiple occurrences (count function)
        function count(arr, data) {
          var count = 0;
          var position = binSearch(arr, data);
          if (position > -1) {
            ++count;
            for (var i = position-1: i > 0; --i) { // works down the array counting occurrences of found value
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


<!-- Chapter 14 in Data Structures and Algorithms: Advanced Algorithms -->

