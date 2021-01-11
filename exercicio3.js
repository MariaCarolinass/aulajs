totalIdade = 0, quantRegular = 0, porcentagemBom = 0, pessoas = 0;

// Receber a idade e a opinião de 15 espectadores de um cinema em relação a um determinado filme
for (var i = 1; i <= 15; i++) {

  idade = parseInt(window.prompt('Digite qual a sua idade:'));
  opniao = window.prompt('Digite qual a sua opnião: 3 - ótimo, 2 - bom, 1 - regular');

  // A média das idades das pessoas que responderam ótimo
  if (opniao == 3) {
    totalIdade += idade;
  };

  // A quantidade de pessoas que responderam regular
  if (opniao == 1) {
    quantRegular++;
  };

  // A porcentagem de pessoas que responderam bom entre todos os espectadores analisados
  if (opniao == 2) {
    pessoas++;
  };

};

// calcular a media das idades
mediaIdade = totalIdade / 15;

// calcular a porcentagem de pessoas que falaram bom
porcentagemBom = (pessoas * 100) / 15;

// Imprimir resultados
document.write('A média das idades das pessoas que responderam ótimo é: ' + mediaIdade);
document.write('</br>A quantidade de pessoas que responderam regular é: ' + quantRegular);
document.write('</br>A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é: ' + porcentagemBom + '%');
