
 let nome 
 let salario
 
 function perguntarNome(){
    nome = prompt("Qual seu nome?")
    salario = parseFloat(prompt("qual seu salario?"))
solicitandoInformações(nome,salario)
perguntarNovamente()
}

function solicitandoInformações(nome,salario){
    var aumentoDosalario = 0
if (salario <= 1500) {
    aumentoDosalario = 0.2 
}
else if (salario <= 2000){
aumentoDosalario = 0.15
}
else if (salario <= 3000){
aumentoDosalario = 0.1 // 10%
}
else{
    aumentoDosalario = 0.5
}

let salarionovo =  salario + (salario * aumentoDosalario)


console.log("Nome do colaborador: "+ nome)
console.log("O salario é de: " + salario) 
console.log("A porcentagem de aumento foi: " + aumentoDosalario)
console.log("O ajuste do Salario do " + nome + " foi de: "+ salarionovo )

}

function perguntarNovamente(){
    let continuar = 's'

    continuar = prompt("desjesa continuar?s/n")

    if (continuar == 's') {

        perguntarNome()
    }else if(continuar == 'n'){
        continuar = false

    }
console.log("Voce encerrou")
}