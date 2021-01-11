totalAltura = 0, mulherAlta = 0, homemBaixo = 100, homemAlto = 0, mulher = 0,
homem = 0, homemPesado = 0, percentualHomem = 0, percentualMulher = 0;

// Defina um conjunto de dados contendo a altura, peso e o sexo (M ou F) de 15 pessoas
for (var i = 1; i <= 15; i++) {

  altura = parseInt(window.prompt('Digite sua altura:'));
  peso = parseInt(window.prompt('Digite seu peso:'));
  sexo = window.prompt('Qual o seu sexo: M ou F?');

  // A média de altura do grupo
  totalAltura += altura;
  mediaAltura = totalAltura / 15;

  // A mulher mais alta
  if (sexo == "F" && altura > mulherAlta) {
    mulherAlta = altura;
  };

  // O homem mais baixo
  if (sexo == "M" && altura < homemBaixo) {
    homemBaixo = altura;
  };

  // O número de homens com mais de 1.70 m de altura
  if (sexo == "M" && altura > 1.70) {
    homemAlto++;
  };

  // O homem mais pesado
  if (sexo == "M" && peso > homemPesado) {
    homemPesado = peso;
  };

  // O percentual de homens
  if (sexo == "M") {
    homem++;
    percentualHomem = homem / 100;
  };

  // O percentual de mulheres
  if (sexo == "F") {
    mulher++;
    percentualMulher = mulher / 100;
  };

};

// Imprimir resultados
document.write('A média de altura do grupo é: ' + mediaAltura + 'm');
document.write('</br>A mulher mais alta tem: ' + mulherAlta + 'm');
document.write('</br>O homem mais baixo tem: ' + homemBaixo + 'm');
document.write('</br>O número de homens com mais de 1.70m de altura é: ' + homemAlto);
document.write('</br>O homem mais pesado pesado pesa: ' + homemPesado + 'kg');
document.write('</br> O percentual de homens é: ' + percentualHomem + '%');
document.write('</br> O percentual de mulheres é: ' + percentualMulher + '%');
