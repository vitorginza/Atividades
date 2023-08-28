

function name(numero1,numero2,operador) {
    let resultado
    let num1 = parseInt(numero1)
    let num2 = parseInt(numero2)
    switch (operador) {
        case "soma":
            resultado = num1 + num2
             break;
    }
    return resultado
}

