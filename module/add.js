function add (firstNum, secondNum){
  if( typeof(firstNum) === "number" && typeof(secondNum)==="number"){
    return firstNum + secondNum;
  } else {
    console.error("타입이 틀렸음");
  }
}
// ? 이게 index에 넣을 깜량은 아니다. 다른 곳에 넣으면 안될까? 분리

module.exports = add;

// ! 모디파이했다 라고 할 수 있습니다. 내보내기와 받기의 작성
// * add.js라고 쓴 이 파일은 모듈파일 입니다. 대신 알맹이가 없다.
