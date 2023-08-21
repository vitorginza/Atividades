let numero1 = parseInt(prompt("Escolha um numero qualquer."))
let numero2 = parseInt(prompt("Escolha um segundo numero qualquer agora."))
let opção = prompt("Agora escolha a operação que voce quer que seja feita: +, - , / , *")


switch (opção) {
    case  "+":
        console.log( numero1 + "+" + numero2 + "=" + (numero1 + numero2) )
        
        break;
    case "-":
          console.log( numero1 + "-" + numero2 + "=" + (numero1 - numero2))

    break;

    case "/":
        console.log( numero1 + "/" + numero2 + "=" + (numero1 / numero2))
    break;

    case "*":
        console.log( numero1 + "*" + numero2 + "=" + (numero1 * numero2))
    break;

    default:

   console.log("Voce não escolheu nenhuma operação!")
    break;
 
}

