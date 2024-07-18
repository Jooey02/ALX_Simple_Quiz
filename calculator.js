// Function for addition
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Function for subtraction
  function subtract(number1, number2) {
    return number1 - number2;
  }
  
  // Function for multiplication
  function multiply(number1, number2) {
    return number1 * number2;
  }
  
  // Function for division
  function divide(number1, number2) {
    if (number2 === 0) {
      return "Error: Cannot divide by zero";
    } else {
      return number1 / number2;
    }
  }
  
  // Add event listener to the addition button
  document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });
  
  // Similar event listeners for other operations (replace 'add' with 'subtract', 'multiply', and 'divide')
  document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
    
  });
  
  document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });
  
  document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });
  