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
