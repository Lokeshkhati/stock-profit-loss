
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = Math.floor((loss / initial) * 100);

    showOutput(
      `Hey, the loss is RS ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage =  Math.floor((profit / initial) * 100);

    showOutput(
      `Hey, Profit is RS ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain`);
  }
}

function showOutput(message) {
  output.innerHTML = message;
}