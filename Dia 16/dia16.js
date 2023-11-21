nome = []
senha = []


function solicitarCadastro() {
    let opcao = prompt("Casdastro = 1" + "Login = 2 " + "excluir conta = 3" + "Encerrar = 4")

    return opcao
}



function cadastro() {
    nome.push(prompt("Digite seu nome: "))
    senha.push(prompt("Digite sua senha: "))
}

function login(nome, senha) {

    let indice = nome.indexOf(nome);
    if (indice !== -1 && senha[indice] == senha) {
        return true;

    } else {
        return false;
    }
}

function excluir(nome) {
    let index = nome.indexOf(nome)
    if (index !== -1) {
        nome.splice(indice, 1)
        senha.splice(indice, 1)
        console.log("Cadastro excluido")
    } else {
        console.log("nao encontrado")
    }

}


let continuar = true
while (continuar) {
    let opcao = solicitarCadastro();


    switch (opcao) {
        case "1":
            cadastro()
            break;
        case "2":
            nome = prompt("digite seu nome: ")
            senha = prompt("digite sua senha: ")
            let login = login(nome,senha)

            if (login) {
                console.log("Login feito com sucesso! ")
            } else {
                console.log("tente novamente! senha e nome errados")
            }
            break;
        case "3":
            nome = prompt("digite seu nome")
            excluir(nome);
            break;
        case "4":
            continuar = false
            break;

        default:
            console.log("Opção invalida")
            break;
    }
}