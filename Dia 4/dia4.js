fome = false
dinheiro = false
restauranteabrt = false


let opçãoFome = prompt("Voce esta com fome? sim ou não")
if (opçãoFome == "sim") {

    fome = true
}

let opçãoDinheiro = prompt("Voce esta com dinheiro hoje? sim ou não")
if ( opçãoDinheiro == "sim") {

 dinheiro = true    
}

let restauranteaberto = prompt("O restaurante esta aberto hoje? sim ou não")
if (  restauranteaberto == "sim") {
    
    restauranteabrt = true
}

if(!fome  || !dinheiro){
console.log("Hoje a janta será em casa")
}
 else if(fome && dinheiro && !restauranteabrt){
    console.log("Peça um delivery")

 }
 else{
    console.log("Hoje o jantar será no seu restaurante preferido!")
    
 }