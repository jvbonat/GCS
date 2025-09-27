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

console.log("2 + 3 =", somar(2, 3));
console.log("7 - 4 =", subtrair(7, 4));
console.log("3 * 5 =", multiplicar(3, 5));
console.log("10 / 2 =", dividir(10, 2));