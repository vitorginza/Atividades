//1.4

let tabuada = parseInt(prompt("Escolha um numero da tabuada"))

for (let i = tabuada; i <= tabuada + 3 ; i++) {
    console.log("Numero de entrada:" + i)

    for (let b = 0; b <= 10; b++) {
        console.log("Numero:" + i+" x "+ b +" = " +(i*b)  )
        
    }
    
}