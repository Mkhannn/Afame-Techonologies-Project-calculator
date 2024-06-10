document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = Array.from(document.getElementsByClassName("btn"));
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.dataset.value;

      if (value === "C") {
        currentInput = "";
        operator = "";
        previousInput = "";
        display.value = "";
      } else if (value === "=") {
        if (currentInput !== "" && previousInput !== "" && operator !== "") {
          currentInput = calculate(previousInput, currentInput, operator);
          display.value = currentInput;
          previousInput = "";
          operator = "";
        }
      } else if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput !== "") {
          operator = value;
          previousInput = currentInput;
          currentInput = "";
          display.value = "";
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function calculate(a, b, operator) {
    let result;
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      default:
        result = 0;
    }
    return result.toString();
  }
});
