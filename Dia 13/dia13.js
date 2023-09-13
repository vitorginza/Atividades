class Carro{
Nome 
Potencia
VelocidadeMaxima
Aceleracao

constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao){

this.Nome = Nome
this.Potencia = Potencia
this.VelocidadeMaxima = VelocidadeMaxima
this.Aceleracao  = Aceleracao  

}
    
Calculotempo(distancia){
   let resultado 
   resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
return;

}

}

// criando objeto
let carros = []
let carro1 = new Carro("Fiat",180,300,6)
let carro2 = new Carro("Forde",220,330,8)
let carro3 = new Carro("Porshe",230,350,8)
carros[0] = carro1
carros[1] = carro2
carros[2] = carro3




class Corrida{
Nomelocal
Tipo
Distancia2
Vencedor
constructor(Nomelocal,Tipo,Distancia2,Vencedor){
this.Nomelocal = Nomelocal
this.Tipo = Tipo
this.Distancia2 = Distancia2
this.Vencedor = Vencedor

verificarVencedor(Vencedor)
let menorTempo = 1000
for (let i = 0; i < carros.length; i++) {
   let tempo = carros[i].Calculotempo(this.distancia)
   if (tempo < menorTempo) {
menorTempo = tempo
      this.Vencedor = carros[i].Nome
   }
}

}
ExibirVencedor(carros){
   this.verificarVencedor(carros)
   console.log("O vencedor foi" + this.Vencedor)
}
}
let corrida = new Corrida("Interlagos","Stock car",1200)
corrida.ExibirVencedor(carros)