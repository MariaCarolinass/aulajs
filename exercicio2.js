/* Faça um programa que receba 10 números, calcule e imprima a soma dos números
ímpares e a soma dos números primos. */

somaImpar = 0, somaPrimo = 0;

for (var i = 1; i <= 10; i++) {

  numero = parseInt(window.prompt('Digite um número:'));

  // A soma dos numeros ímpares
  if (numero % 2 == 1) {
    somaImpar += numero;
  };

  // A soma dos numeros primos. NÃO RESOLVIDO!
  if (numero % 1 == 0 && numero % numero == 0) {

    somaPrimo += numero;

  };

};

// Imprimir resultados
document.write('A soma dos números ímpares é: ' + somaImpar);
document.write('</br>A soma dos números primos é: ' + somaPrimo);
