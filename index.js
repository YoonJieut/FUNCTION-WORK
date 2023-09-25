// function first() {
//   let a = 1;
//   return a;
// }

// console.log(first()); // 1
// // ? 실험해볼 만한 것
// // console.log(a); // ReferenceError-참조에러
// // ? a가 있는데 왜? 참ㅈ가 안될끼?
// // * 함수안의 변수는 지역변수다 끝이 아니라 왜? 사라질까의 의문점
// //* 왜 전역과 지역을 나눠놨을까? 
// // ! 이런 파일이 수십개 수만개일때, 겹치면 찾을 방법이 없습니다.
// // * 지역변수는 열을 때 시작 닫을 때 끝남 - 지역변수는 자체로 의미가 없다.
// // * 가장 많이 쓰지만 중요하지 않는 지역변수와 그의 이름

// // ! 함수 스코프의 등장

const a = "안녕"
a = "잘가"
function second() {
  const a = "아직 안갔어?";
  const b = 1;
  return b;
}
console.log(a); // 잘가
console.log(second()); // 1

// 전역 변수로 var로 갈아치운는 것

// ! let으로 바꿔주자 error가 발생
// ? 왜??
// * 재할당이 무제한인 var
// * 재할당(재선언)이 제한이 걸리는 let

// ! const로 바꿔도 문제 없긴 하다



