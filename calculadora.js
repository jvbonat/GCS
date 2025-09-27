function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

function potencia(a, b) {
  return a ** b;
}

function raizQuadrada(a) {
  if (a < 0) {
    return "Erro: número negativo!";
  }
  return Math.sqrt(a);
}

console.log("√16 =", raizQuadrada(16));
console.log("2 + 3 =", somar(2, 3));
console.log("√16 =", raizQuadrada(16));
console.log("7 - 4 =", subtrair(7, 4));
console.log("3 * 5 =", multiplicar(3, 5));
console.log("10 / 2 =", dividir(10, 2));
console.log("2 ^ 4 =", potencia(2, 4));