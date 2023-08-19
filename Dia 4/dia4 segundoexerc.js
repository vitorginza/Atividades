//Criando as variaveis 
let nome 
let idade 
let cartaMotorista = false
let temCarro = false


//perguntas

nome = prompt('Qual o seu nome?')
idade = parseInt(prompt("Qual sua idade?"))

let temcarta = prompt("Voce tem carta de motorista? (s/n)")
if (temcarta == "s") {
    cartaMotorista = true
}

let temcarros = prompt("Voce tem um carro para dirigir?(s/n)")
if (temcarros == "s") {
temCarro = true
    
}
//consolelog

if (idade < 18 || !cartaMotorista) {
    console.log( nome + ", voce não pode dirigir.")
    
}
else if(idade <= 18 && cartaMotorista && !temCarro){
    console.log(nome + "voce pode dirigir mas não tem um carro")

}
else{
console.log(nome + " voce sera o motorista hoje!")
}