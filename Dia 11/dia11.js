let Nomes = []
let Notas = []

let mediageral
let continuar = true
let nomes1 = 0
let notas1 = 0
while (continuar) {

    let nome = prompt("Qual seu nome?")
    Nomes[nomes1] = nome
    let nota = parseInt(prompt("Qual sua nota?"))
    Notas[notas1] = nota

    let desejaContinuar = prompt("Deseja continuarcadastrando ? s/n")
    if (desejaContinuar == "n") {

        continuar = false
    }
    nomes1++
    notas1++
}

console.log("Nota dos alunos!")
for (let index = 0; index < Notas.length; index++) {
    console.log(Nomes[index] + " - " + Notas[index])

}
let todasNotas = 0
for (let index = 0; index < Notas.length; index++) {
    todasNotas += Notas[index]

}
let media = todasNotas / Nomes.length

console.log("A media geral da sala foi: " + media)
console.log("A soma das notas da sala foi: " + todasNotas)

// exercicio 2

let modelos = []
let anos = []
let valores = []
let i = 0
continuar = true
while (continuar) {

    let modelo = prompt("Qual o modelo do carro?")
    modelos[i] = modelo
    let ano = parseInt(prompt("Qual o ano do carro?"))
    anos[i] = ano
    let valor = parseFloat(prompt("Qual o valor do carro?"))
    valores[i] = valor
    i++

    let querContinuar = prompt("Deseja continuar? (s/n)")
    if (querContinuar == "n") {
        continuar = false
    }

};

for (let index = 0; index < modelos.length; index++) {
    console.log(" Modelo: " + modelos[index] + " Ano: " + anos[index] + " Valor: " + valores[index])

};

//////////

for (let i = 0; i < valores.length - 1; i++) {
    for (let index = 0; index < valores.length - 1; index++) {
        if (valores[index] < valores[index + 1]) {

            let valoresum = valores[index]
            valores[index] = valores[index + 1]
            valores[index + 1] = valoresum
            
            let modelosum = modelos[index]
            modelos[index] = modelos[index + 1]
            modelos[index + 1] = modelosum


          let anosum = anos[index]
          anos[index] = anos[index + 1]
         anos[index + 1] =anosum

        }

    }

}