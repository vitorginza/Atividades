let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]


function arrayNumero(arrayum, arraydois){
    let resultado = []
    let contadorResultado = 0

for (let i = 0; i < arrayum.length; i++) {
    
    for (let j  = 0; j  < arraydois.length; j ++) {
       if(arrayum[i] == arraydois[j]){
        resultado[contadorResultado] = arrayA[i]
        contadorResultado++
        j = arraydois.length
       }
        
    }
    
}
    
    return resultado
}