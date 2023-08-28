//criando variaveis
let nota
let sexo
let mediageral = 0
let maiorNotahomens = 0
let qtHomens = 0
let mulheresacimade7 = 0
let contador = 1
//while
while (contador <= 4) {
    nota = parseInt(prompt("Qual a media do aluno?" + contador ))
    sexo = prompt("qual a sexualidade do aluno?(m/f)")

    if (sexo == "m") {
    if (nota > maiorNotahomens) {
        maiorNotahomens = nota
    }
    qtHomens++
}
   
if(sexo == "f" && nota > 7){

   mulheresacimade7++
}

   mediageral += nota
   contador++

}

mediageral = mediageral / 10

console.log("A media geral dos alunos: " + mediageral)
console.log("Quantidade de homens que enviaram as notas: " + qtHomens)
console.log("Quantidade de mulheres que teve maior nota da sala foi: " + mulheresacimade7)
console.log("Maior nota dentre os homens foi: " + maiorNotahomens)