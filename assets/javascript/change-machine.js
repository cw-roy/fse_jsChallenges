function calculateChange(amount) {
    let twenties = Math.floor(amount / 20);
    amount = amount % 20;
    let tens = Math.floor(amount / 10);
    amount = amount % 10;
    let fives = Math.floor(amount / 5);
    amount = amount % 5;
    let ones = amount;
  
    let result = "<table><tr><th>Denomination</th><th>Quantity</th></tr>";
  
    if (twenties > 0) {
      result += `<tr><td>Twenties</td><td>${twenties}</td></tr>`;
    }
    if (tens > 0) {
      result += `<tr><td>Tens</td><td>${tens}</td></tr>`;
    }
    if (fives > 0) {
      result += `<tr><td>Fives</td><td>${fives}</td></tr>`;
    }
    if (ones > 0) {
      result += `<tr><td>Ones</td><td>${ones}</td></tr>`;
    }
  
    result += "</table>";
    return result;
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = parseInt(document.querySelector('#amount').value);
    const result = calculateChange(amount);
    document.getElementById("result").innerHTML = result;
  });
  