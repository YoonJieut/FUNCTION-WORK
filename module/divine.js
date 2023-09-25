function divine (firstNum, secondNum){
  if( typeof(firstNum) === "number" && typeof(secondNum)==="number"){
    return firstNum / secondNum;
  } else {
    console.error("타입이 틀렸음");
  }
}

module.exports = divine;