// - Practice arithmetic operations (at least 2)

const calculator = (operation, a, b) => {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b !== 0) {
        return a / b;
      } else {
        return "Error: Division by zero is not allowed";
      }
    default:
      return "Error: Invalid operation";
  }
}

console.log(calculator("add", 5, 3)); 
console.log(calculator("subtract", 5, 3)); 
console.log(calculator("multiply", 5, 3)); 
console.log(calculator("divide", 5, 3)); 
