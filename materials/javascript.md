JavaScript, created by Brendan Eich in 1995, is one of the most widely used web development languages. It was designed to build dynamic web pages at first. A script is a JS program that may be added to the HTML of any web page. When the page loads, these scripts execute automatically.

Primitive Data Types (stores one value):
  + String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.
  + Number - It represents a number and can be written with or without decimals.
  + BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
  + Boolean - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.
  + Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
  + Null - It represents a non-existent or a invalid value.
  + Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.

Non-Primative Data Types (can store multiple values):

Data Structures:
  + Objects - a standalone entity, with properties and type.
    + Instance (built in):
      + const obj = new Object();
    + Methods:
      + Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
      + Object.create(): Creates a new object with the specified prototype object and properties.
      + Object.defineProperty(): Adds the named property described by a given descriptor to an object.
      + Object.defineProperties(): Adds the named properties described by the given descriptors to an object.
      + Object.entries(): Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
      + Object.freeze(): Freezes an object. Other code cannot delete or change its properties.
      + Object.fromEntries(): Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).
      + Object.getOwnPropertyDescriptor(): Returns a property descriptor for a named property on an object.
      + Object.getOwnPropertyDescriptors(): Returns an object containing all own property descriptors for an object.
      + Object.getOwnPropertyNames(): Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
      + Object.getOwnPropertySymbols(): Returns an array of all symbol properties found directly upon a given object.
      + Object.getPrototypeOf(): Returns the prototype (internal [[Prototype]] property) of the specified object.
      + Object.is(): Compares if two values are the same value. Equates all NaN values (which differs from both IsLooselyEqual used by == and IsStrictlyEqual used by ===).
      + Object.isExtensible(): Determines if extending of an object is allowed.
      + Object.isFrozen(): Determines if an object was frozen.
      + Object.isSealed(): Determines if an object is sealed.
      + Object.keys(): Returns an array containing the names of all of the given object's own enumerable string properties.
      + Object.preventExtensions(): Prevents any extensions of an object.
      + Object.seal(): Prevents other code from deleting properties of an object.
      + Object.setPrototypeOf(): Sets the object's prototype (its internal [[Prototype]] property).
      + Object.values(): Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

  + Arrays - linear collection of elements, which can be accessed via indices.
    + Instance (built in):
      + const array = new Array();
    + Methods:
      + push(element): Adds an element to the end of the array
      + pop(): Removes the last element of the array
      + shift(): Removes the first element of the array
      + slice(beginIndex, endIndex): Returns a part of the array from beginIndex to endIndex
      + splice(beginIndex, endIndex):	Returns a part of the array from beginIndex to endIndex
      and modifies the original array by removing those elements
      + concat(arr): Adds new elements (from arr) into the array at the end of the array

  + Lists (Abstract Data Type, array) - can be any data type. Creates a class. Each item in a list is called an element.
    + Instance (built in if array):
      + const list = new Array();

  + Stack - list of elements that are accessible only from one end of the list, which is the top. Stack is known as a last-in, first-out (LIFO) data structure. Because of the last in, first-out nature of the stack, any element that is not currently at the top of the stack cannot be accessed, you have to dispose of the elements above it first.
    + Instance: create the stack class and then call:
      + let stack = new Stack();

  + Queue - type of list where data are inserted at the end and are removed from the front. Example of First-In, First Out (FIFO) data strucutre. Good example of a queue is to model scenarios such as customers standing in the line at a bank or a grocery store.
    + Instance:
      + Create list class with methods and call with:
        + let queue = new Queue();
    + Methods:
      + enqueue: To add elements at end of the queue.
      + dequeue: To remove an element from the front of the queue.
      + peek: To get the front element without removing it.
      + isEmpty: To check whether an element is present in the queue or not.
      + printQueue: To print the elements present in queue.

  + Linked Lists - collection of objects called nodes. Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link. While array elements are referenced by their position, linked list elements are referenced by their relationship to the other elements in the linked list. We mark the end of the linked list with the "null" node. We mark the beginning of a linked list with the "head" node.
    + Instance:
      + Create Node Class
      + Create Linked List Class

  + Doubly Linked Lists - gain efficiency vs a single linked list for removal purposes because we no longer have to search for the node.
    + Instance:
      + Create Node Class
      + Create Linked List Class

  + Circularly Linked Lists - similar to singular linked lists. Except its head nodes "next" property points back to itself (head.next = head). Every new node has its "next" property pointing to the head of the list. This is why it's circular in nature. The reason you would create this is to move backward through a linked list without having to define the doubly part.

  + Dictionary (Object) - data strucutre that stores data as key-value pairs. The basis of this class is an Object, but using Array access notation, since objects in Javascript are associative arrays. This allows us to dynamically add key value pairs, and use Array functionality such as sorting, but at the same time, allowing us to have string keys rather than just numeric.
    + Instance
      + let obj = new Object();

  + Hashmap (Map) - data strucutre is designed around an array. Each data element is stored in the array based on an associated data element called the key, which is similar to the concept of the key with the dictionary data structure.
    + Instance
      + let map = new Map();

  + Set - collection of unique elements. These elements are called members.
    + Members are unordered
    + Members cannot occur more than once
    + Built around an array
    + Instance:
      + let set = new Set();
    + Properties:
      + Set.size(): Returns the number of values in the Set object.
    + Methods:
      + add(): Adds a new element to the Set
      + delete():	Removes an element from a Set
      + has(): Returns true if a value exists
      + clear(): Removes all elements from a Set
      + forEach(): Invokes a callback for each element
      + values():	Returns an Iterator with all the values in a Set
      + keys():	Same as values()
      + entries(): ∂Returns an Iterator with the [value,value] pairs from a Set
    + Operations:
      + Union: a new is obtained by combining the members of one set with the members of another set
      + Intersection: a new set is obtained by adding all the members of one set that also exist in a second set
      + Difference: a new set is obtained by adding all the memebers of one set except those that also exist in the second set

  + Trees - commonly used data structure in computer science. Non linear data structure used to store data in a herarchical manner. Examples include files in a file system or storing sorted lists of data. Binary trees are chosen over more primary data structures because you can search a binary tree very quickly (as opposed to a link list) and you can quickly insert and delete data from a binary tree (as opposed to an array). A tree is made up of a set of nodes connected by edges (example is an org shot). each box is a node and the lines connecting the boxes are edges. The nodes represent the positions that make up an organization, and the edges represent the relationships between those positions.
    + root node: top node of a tree.
    + parent node: If a node is connected to other nodes below it, the preceding node is called the parent node
    + child nodes (referred to as "left" and "right"): nodes following the parent node A node can have zero, one or more child nodes connected to it
    + leaf node: a node without any children
  + Binary Trees - restrict the number of child nodes to no more than two.
    + Path: the series of edges you follow to get from one node to another node.
    + Tree traversal: visiting all the nodes in a tree in some particular order
    + Levels: tree can be broken into levels. The root node is at level 0, it's children at 1, and their children at level 2 and so on.
    + Subtree: consists of the root node's chilren, it's children's children and so on.
    + Key-Value: each node in a tree has a value associated with it
    + Child Nodes: referred to as "left" and "right".

Built-In Helper Classes:
  + String:
    + Methods:
      + length(): This property returns the number of characters present in the string. In the case of an array, this property returns the number of elements present in the array.
      + indexOf(): This method returns the index of the last occurrence of a specified value in a string, or -1 if the value is not found.
      + lastIndexOf(): This method returns the index of the last occurrence of a specified value in a string, or -1 if the value is not found.
      + slice(startIndex, endIndex): This method extracts a part of the string based on the given starting-index and ending-index and returns a new string.
      + substring(startIndex, endIndex): This method returns the part of the given string from the start index to the end index. Indexing start from zero (0).
      + substr(start, length): This method returns the specified number of characters from the specified index from the given string. It basically extracts a part of the original string.
      + replace(replaceValue, replaceValueWith): This method replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
      + replaceAll(regexp | substr, newSubstr | function): This method returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
      + toUpperCase(stringVariable): This method returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
      + toLowerCase(stringVariable): This method converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
      + concat(objectOfString): This method combines the text of two strings and returns a new combined or joined string. To concatenate two strings, we use concat() method on one object of string and send another object of string as a parameter. This method accepts one argument. The variable contains text in double quotes or single quotes.
      + trim(): This method is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn’t accept any parameter.
      + trimStart(): This method removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.
      + trimEnd(): This method removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
      + padStart(): This method pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.
      + padEnd(): This method pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.
      + charAt(indexOfCharacter): This method returns the character at the specified index. String in JavaScript has zero-based indexing.
      + charCodeAt(indexOfCharacter): This method returns a number that represents the Unicode value of the character at the specified index. This method accepts one argument.
      + split(character): This method splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.

  + Date:
    + Instance:
      + let date = new Date();
    + Methods:
      + getDate(): Fetch the date of a month from a given Date object.
      + getDay(): Fetch the day of a week(0 to 6) from a given Date object.
      + getFullYear(): Fetch the year from a given Date object.
      + getHours(): Return the hours from a given Date object.
      + getMilliseconds(): Fetch the milliseconds from a given Date object.
      + getMinutes():	Fetch the minutes from the given Date object .
      + getMonth():	Fetch the month(0 to 11) from the given Date object.
      + getSeconds():	Fetch the seconds from the given Date object.
      + getTime(): Return the number of milliseconds since 1 January 1970 .
      + getTimezoneOffset(): Return the time difference between in minutes.
      + getUTCDate(): Fetch the date of a month according to universal time from a given Date object.
      + getUTCDay(): Fetch the date of a month according to universal time from a given Date object.
      + getUTCFullYear(): Fetch the year according to universal time from a given Date object.
      + getUTCHours(): Fetch the hours according to universal time from a given Date object.
      + getUTCMilliseconds():	Fetch the millisecond according to universal time from a given Date object.
      + getUTCMinutes(): Fetch the minutes according to universal time from a given Date object.
      + getUTCMonth(): Fetch the month according to universal time from a given Date object.
      + getUTCSeconds(): Fetch the second according to universal time from a given Date object
      + now(): Return the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
      + parse(): Return the time difference in milliseconds from, January 1, 1970, till the date we provide.
      + setDate(): Set date of a month into a date object which is created using date() constructor.
      + setFullYear(): Set year into a date object which is created using Date() constructor.
      + setHours(): Set hours into a date object which is created using the Date() constructor.
      + setMilliseconds(): Set milliseconds into a date object which are created using date() constructor.
      + setMinutes():	Set minutes into a Date object which is created using Date() constructor.
      + setMonth(): Set month into a date object which is created using the Date() constructor.
      + setSeconds():	Set seconds into a Date object which is created using Date() constructor.
      + setUTCDate():	Set date of a month according to universal time into a date object.
      + setUTCFullYear():	Set year into a date object according to universal time.
      + setUTCHours(): Set hours into a date object according to universal time.
      + setUTCMilliseconds(): Set milliseconds according to universal time into a date object.
      + setUTCMinutes(): Set minutes according to universal time into a date object.
      + setUTCMonth(): Set month according to universal time into a date object.
      + setUTCSeconds(): Set seconds according to universal time into a date object.
      + toDateString():	Convert the given date object’s contents of the date portion into a string.
      + toISOString(): Convert the given date object’s contents into a string in ISO format (ISO 8601).
      + toJSON():	Convert the given date object’s contents into a string.
      + toLocaleDateString(): Convert a date to a string.
      + toLocaleTimeString():	Fetch the time from a given Date object.
      + toLocaleString():	Convert a date and time to a string.
      + toString():	Convert the given date object’s contents into a string.
      + toTimeString():	Return the time portion of the given date object in English.
      + toUTCString(): Convert the given date object’s contents into a string according to the universal time zone UTC.
      + UTC(): Return the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
      + valueOf(): Get the number of milliseconds between 1 January 1970 00:00:00 UTC and the given date.

  + Math:
    + Methods:
      + abs(x):	Absolute value of x
      + acos(x): Arccosine of x, in radian
      + asin(x): Arcsine of x, in radian
      + atan(x): Arctangent of x, a numeric value between -PI/2 and PI/2 radian
      + atan2(y, x): Arctangent of the quotient of its arguments
      + ceil(x): Value of x rounded up to the nearest integer
      + cos(x):	Cosine of x (x in radians)
      + exp(): Value of E^x
      + floor(): Value of x rounded below to the nearest integer
      + log(): Natural logarithm (base E) of x
      + max(a, b, …):	Highest value
      + min(a, b, …):	Lowest value
      + pow(x, y): Value of x to power of y
      + random():	Random number between 0 and 1
      + round(x):	Value of x rounded to the nearest integer
      + sin(x):	Sine of x (x in radians)
      + sqrt(x): Square root of x
      + tan(x):	Tangent of angle

  + Boolean:
    + Methods:
      + toString():	Return a string either “true” or “false” depending upon the value of the specified boolean object
      + valueOf(): Return a boolean value either “true” or “false” depending upon the value of the specified boolean object

  + DataView:
    + Methods:
      + getFloat32():	Get a 32-bit float at the specified location
      + getFloat64():	Get a 64-bit float at the specified location
      + getInt8(): Get an 8-bit integer in the byte at the specified location
      + getInt16():	Get a 16-bit integer at the specified location
      + getInt32():	Get a 32-bit integer at the specified location
      + getUint8():	Get an unsigned 8-bit integer at the specified location
      + getUint16(): Get an unsigned 16-bit integer at the specified location
      + getUint32(): Get an unsigned 32-bit integer at the specified location
      + setFloat32():	Get an assigned 32-bit float value at the specified location
      + setFloat64():	Get an assigned 64-bit float value at the specified location;
      + setInt8(): Get an signed 8-bit integer at the specified location
      + setInt16():	Get an assigned 16-bit integers at the specified location
      + setInt32():	Get an assigned 32-bit integers at the specified location
      + setUint8():	Get an unsigned 8-bit integer at the specified location
      + setUint16(): Get an unsigned 16-bit integer at the specified location
      + setUint32(): Get an unsigned 32-bit integer at the specified location
