let nomes = ["vitor","maria"]
let senhas = []
contador = 2
let continuar = true
let nome
let senha
/////////////////
let arraynome = []
let arraysenha = []
let sup = 0
while (continuar) {
    let cadastro = prompt("Voce deseja (cadastrar-1 / Login-2 / excluir-3 / encerrar-4 )?")

    switch (cadastro) {
        case "1":
            nome = prompt("Qual seu nome?")
            senha = prompt("Qual sua senha?")
            nomes[contador] = nome
            senhas[contador] = senha
            contador++
            break;
        case "2":
            nome = prompt("Coloque seu nome: ")
            senha = prompt("Coloque sua senha: ")
            for (let index = 0; index < nomes.length; index++) {
                if (nome == nomes[index]) {
                    if (senha == senhas[index]) {
                        console.log("Seu login foi feito com sucesso ")
                    }
                }else{
                    console.log("Nome e senha invalido!")
                }
            }
            break;

       
            case "3":

                for (let i = 0; i < nomes.length; i++) {
                   if (nome == nomes[i]) {
                    console.log("Usuario excluido")    
                   }else{
                   arraynome[sup] = nomes[i]
                   arraysenha[sup] = senhas[i]
                   sup++
                }
                }
                nomes = arraynome
                senhas = arraysenha
            
            break;
            case "4":
                let continuarr = prompt("deseja encerrar? sim ou n")
                if (continuarr == "s") {
                    continuar = false       
                }
                break;
    }

}