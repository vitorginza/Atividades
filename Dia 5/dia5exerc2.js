let gasolina
let alcool
let calibrar
let opção = prompt(" Posto: Voce quer abastecer  com gasolina, com alcool ou calibrar seus pneus?")

let valor


switch (opção) {
    case "gasolina":
         valor = parseInt(prompt("Qual valor desejado para abastecer? ")  )
         gasolina = valor /5
        console.log( "A quantidade em litros de gasolina deu: " + gasolina + "L")
        break;
    case "alcool":
        valor = parseInt(prompt("Quanto deseja colocar em alcool?"))
        alcool = valor / 3
        console.log("Foi abastecido " +alcool +"L" )

         break;

    default:
        console.log("Os pneus foram calibrados!")

        break;
}