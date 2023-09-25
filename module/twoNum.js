function twoNum (firstNum, secondNum, running){
  if( typeof(firstNum) === "number" && typeof(secondNum)==="number"){
    return firstNum, running, secondNum;
  } else {
    console.error("타입이 틀렸음");
  }
}

module.exports = twoNum;