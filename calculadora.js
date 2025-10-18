// calculadora.js - versión 1: sumar

function sumar(a, b, c) {
  return a + b + c;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

console.log("5 + 3 =", sumar(5, 3, 6));
console.log("5 - 3 =", restar(5, 3));
console.log("5 * 3 =", multiplicar(5, 3));

// Nueva funcionalidad en feature1
function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir entre 0";
  }
  return a / b;
}