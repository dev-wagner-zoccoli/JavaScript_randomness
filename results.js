// aluno - nota1 - nota2 - media - Aprovado/Reprovado

var alunos = ["Wagner", "Daniele", "Karl", "Pedrenho"];
var notasA = [9, 8, 10, 5];
var notasB = [8, 7, 9, 4];

// var media = function (n1, n2) {
//   return (n1 + n2) / 2;
// };

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function resultado(media) {
  if (media >= 7) return "Aprovado! GG!";
  else return "Reprovado! Kkkcry, noob!";
}

for (var index in alunos) {
  var nota1 = notasA[index];
  var nota2 = notasB[index];

  var m = media(nota1, nota2);

  console.log(
    alunos[index] +
      " - " +
      nota1 +
      " - " +
      nota2 +
      " - " +
      m +
      " - " +
      resultado(m)
  );
}
