//definindo as variaveis
 let nome = ""
let idade = 0
let altura = 0
let peso = 0
//perguntando ao usuario 
nome = prompt("Digite seu nome?")
idade = promptInt(prompt("Digite sua idade: "))
altura = promptFloat(prompt("Digite sua altura: "))
// Descobrindo ano de nascimento
let anoNSC = 0
anoNSC = 2023 - idade
//IMC
let IMC
IMC = peso / (altura * altura)

console.log("Olá" + nome + " você tem " + idade +" anos, nasceu em" + anoNSC + "tem" + altura + "de altura, pesa" + peso +"kg e seu IMC é" +IMC+"Kg/m2" )