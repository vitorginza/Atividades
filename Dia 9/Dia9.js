//1.1
let nome = prompt("Qual seu nome? ")
let idade = parseInt(prompt("Qual sua idade? "))
let peso = parseFloat(prompt("Qual seu peso?"))
let altura = parseFloat(prompt("Qual a sua altura?"))
let profissao = prompt("Qual sua profrissão?")

console.log("Ola " + nome + " voce tem " +  idade + " anos " +" é " + profissao + ", tem " + altura+ "M  de altura " + " e " + peso+"Kg."  )
//1.2
if (idade > 18) {
    console.log("Voce esta liberado para tomar umas geladas")
}else{
    console.log("Sem gelada para voce")

}
//1.3
let ano = idade * 365
let mes = idade * 30
let dias = idade * 7

console.log("Sua idade em anos são = " + ano)
console.log("Sua idade em meses são = " + mes)
console.log("Sua idade em dias são = " + dias)

// Calculo do IMC do usuario
let IMC 
IMC = peso / (altura * altura)

if (IMC < 18.5) {
    console.log("Seu resulto no IMC foi (Magreza)")
    
}else if(IMC == 18.5 && 24.9){
    console.log("Seu resulto no IMC foi (Normal)")

}else if(IMC == 24.9 && 30){
    console.log("Seu resulto no IMC foi (Sobrepeso)")

}else if(IMC < 30){
    console.log("Seu resulto no IMC foi (Obesidade)")

}
//descobrindo o ano que nasceu
let anotual = 2023
let anonasc =  anotual - idade
console.log("Voce nasceu em: "  + anonasc)

//Loop for
let anovivido = anonasc
let idadeatual = 0

//for ( anovivido = anonasc; anovivido <= anonasc; anovivido++) {
  //  console.log(anovivido + " - " + anonasc + " anos de idade") 
    //idadeatual++
//}
//for (let index = anonasc; index <= 2023; index++) {
 //   console.log(index + " - " + idadeatual + " anos de idade") 
 //  idadeatual++
//}
for (let index = 0; index <= idade; index++) {
    console.log((anonasc + index)+ " - " + index +" anos de idade "  )
    
}