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
  + Instance:
    + const obj = new Object();
+ Arrays - linear collection of elements, which can be accessed via indices.
  + Instance:
    + const array = new Array();
+ Lists (Abstract Data Type) - can be any data type. Creates a class. Each item in a list is called an element.
+ Stack - list of elements that are accessible only from one end of the list, which is the top. Stack is known as a last-in, first-out (LIFO) data structure. Because of the last in, first-out nature of the stack, any element that is not currently at the top of the stack cannot be accessed, you have to dispose of the elements above it first.
+ Queue - type of list where data are inserted at the end and are removed from the front. Example of First-In, First Out (FIFO) data strucutre. Good example of a queue is to model scenarios such as customers standing in the line at a bank or a grocery store.
+ Linked Lists - collection of objects called nodes. Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link. While array elements are referenced by their position, linked list elements are referenced by their relationship to the other elements in the linked list. We mark the end of the linked list with the "null" node. We mark the beginning of a linked list with the "head" node.
+ Doubly Linked Lists - gain efficiency vs a single linked list for removal purposes because we no longer have to search for the node.
+ Circularly Linked Lists - similar to singular linked lists. Except its head nodes "next" property points back to itself (head.next = head). Every new node has its "next" property pointing to the head of the list. This is why it's circular in nature. The reason you would create this is to move backward through a linked list without having to define the doubly part.
+ Dictionary (Object) - data strucutre that stores data as key-value pairs. The basis of this class is an Object, but using Array access notation, since objects in Javascript are associative arrays. This allows us to dynamically add key value pairs, and use Array functionality such as sorting, but at the same time, allowing us to have string keys rather than just numeric.
  + Instance
    + let obj = {};
+ Hashmap - data strucutre is designed around an array. Each data element is stored in the array based on an associated data element called the key, which is similar to the concept of the key with the dictionary data structure.
  + Instance
    + let map = new Map();

+ Set - collection of unique elements. These elements are called members.
  + Members are unordered
  + Members cannot occur more than once
  + Built around an array
  + Instance:
    + let set = new Set();
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
