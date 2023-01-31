// var obj1 = {
//   valueOfThis: function(){
//     return this;
//   }
// }
// var obj2 = {
//   valueOfThis: ()=>{
//     return this;
//   }
// }

// console.log(obj1.valueOfThis());
// console.log(obj2.valueOfThis());

// function addFourNumbers(num1,num2,num3,num4){
//   return num1 + num2 + num3 + num4;
// }

// let fourNumbers = [5, 6, 7, 8];


// const h = addFourNumbers(...fourNumbers);
// console.log(h)

// var scope = "global scope";
// function check()
// {
//     var scope = "local scope";
//     function f()
//     {
//          return scope;
//     }
//     return f;
// }

// console.log(check())

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}