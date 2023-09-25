
//  * 변수 선언
const add = require("./module/add.js");
const divine = require("./module/divine.js");
const minus = require("./module/minus.js");
const multi = require("./module/multi.js");
const twoNum = require("./module/twoNum.js");

// * 이렇게도 많이 작성하셨습니다. 객체 선언, 프로퍼티로 4가지
const calc = {
  add : require("./module/add.js"),
  divine : require("./module/divine.js"),
  minus : require("./module/minus.js"),
  multi : require("./module/multi.js"),
}
// ! console.log도 같은 객체로 접근한 것이라는 것 => 이것이 객체의 힘
console.log( add(1,2) ); 
console.log( divine(1,2) ); 
console.log( multi(2, 2) ); 
console.log( minus(5,2) ); 

console.log( calc.add(5,2) ); 
console.log( calc.divine(5,2) ); 
console.log( calc.multi(5,2) ); 
console.log( calc.minus(5,2) ); 

// ? 이게 index에 넣을 깜량은 아니다. 다른 곳에 넣으면 안될까? 분리
console.log("---------------------")
console.log( twoNum(1,4,"-"));