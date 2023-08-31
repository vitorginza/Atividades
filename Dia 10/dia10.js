let array = []
let array2 = []
let quantidade = parseInt(prompt("Quantas vezes vc quer colocar no array?"))

for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt("digete o numero "+ (i + 1)))
  array[i] = numero
    
}
console.log(array)


let j = 0
for (let i = 4; i >= 0; i--){
    array2[j] = array[i]
 j++
}
console.log("array2 "+ array2)