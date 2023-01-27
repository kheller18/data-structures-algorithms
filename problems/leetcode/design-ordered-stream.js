/**
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 * There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.
 * Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.
 * Implement the OrderedStream class: OrderedStream(int n) Constructs the stream to take n values.
 * String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
 * RUNTIME: 197 ms (beats 66.99%)
 * MEMORY: 53.6 MB (beats 88.14%)
 */

var OrderedStream = function(n) {
  this.obj = {};
  this.p = 0;
};

OrderedStream.prototype.insert = function(idKey, value) {
  this.obj[idKey - 1] = value;
  let result = [];

  while (this.obj[this.p]) {
    result.push(this.obj[this.p]);
    this.p++;
  }
  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

