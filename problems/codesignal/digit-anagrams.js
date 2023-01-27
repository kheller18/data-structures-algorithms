function digitAnagrams(a) {
  let map = new Map();
  let count = 0;

  a.forEach((int) => {
    let string = int.toString();
    string = string.split('').sort().join('');
    let temp = map.get(string);
    if (temp) {
      count += temp;
      map.set(string, temp + 1);
    } else {
      map.set(string, 1);
    }
  })

  return count;
}

let output = digitAnagrams([25,35,872,228,53,278,872]);
let expectedOutput = 4;

if (output === expectedOutput) {
  console.log('Success!')
} else {
  console.log(`Unsuccessful ${output}`)
}
