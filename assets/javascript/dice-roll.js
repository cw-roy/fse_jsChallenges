//placeholder stuff copied from coin flip

function rollDice() {
    let randomNum = Math.random();
  
    if (randomNum < 0.5) {
      return "Snake eyes";
    } else {
      return "New pair of shoes.";
    }
  }
  
  function showResult() {
    let result = rollDice();
    document.getElementById("result").innerHTML = result;
    setTimeout(function () {
      document.getElementById("result").innerHTML = "";
    }, 1000);
  }