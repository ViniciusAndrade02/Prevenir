/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. */

// Cria variáveis para armazenar os dados
let nomeUm, nomeDois, nomeTres, nomeQuatro, nomeCinco
let idadeUm, idadeDois, idadeTres, idadeQuatro, idadeCinco
let mediaIdade, nomeMaior, maiorIdade = 0

    // Recebe as valores digitadas e armazena nas variáveis
    nomeUm = prompt("Digite o seu nome: ")
    idadeUm = Number(prompt("Digite a sua idade: "))

        // Verifica se a idade digitada é maior que a maior idade
        if(idadeUm > maiorIdade){

            // Se sim, maior idade recebe a idade digitada
            maiorIdade = idadeUm

            // O nome é armazenado em nomeMaior
            nomeMaior = nomeUm

        }

    // Recebe as valores digitadas e armazena nas variáveis
    nomeDois= prompt("Digite o seu nome: ")
    idadeDois = Number(prompt("Digite a sua idade: "))

        // Verifica se a idade digitada é maior que a maior idade
        if(idadeDois > maiorIdade){

            // Se sim, maior idade recebe a idade digitada
            maiorIdade = idadeDois

            // O nome é armazenado em nomeMaior
            nomeMaior = nomeDois

        }

    // Recebe as valores digitadas e armazena nas variáveis
    nomeTres = prompt("Digite o seu nome: ")
    idadeTres = Number(prompt("Digite a sua idade: "))

        // Verifica se a idade digitada é maior que a maior idade
        if(idadeTres > maiorIdade){

            // Se sim, maior idade recebe a idade digitada
            maiorIdade = idadeTres

            // O nome é armazenado em nomeMaior
            nomeMaior = nomeTres

        }

    // Recebe as valores digitadas e armazena nas variáveis
    nomeQuatro = prompt("Digite o seu nome: ")
    idadeQuatro = Number(prompt("Digite a sua idade: "))

        // Verifica se a idade digitada é maior que a maior idade
        if(idadeQuatro > maiorIdade){

            // Se sim, maior idade recebe a idade digitada
            maiorIdade = idadeQuatro

            // O nome é armazenado em nomeMaior
            nomeMaior = nomeQuatro

        }

    // Recebe as valores digitadas e armazena nas variáveis
    nomeCinco = prompt("Digite o seu nome: ")
    idadeCinco = Number(prompt("Digite a sua idade: "))

        // Verifica se a idade digitada é maior que a maior idade
        if(idadeCinco > maiorIdade){

            // Se sim, maior idade recebe a idade digitada
            maiorIdade = idadeCinco

            // O nome é armazenado em nomeMaior
            nomeMaior = nomeCinco

        }


    // Realiza o cálculo da média
    mediaIdade = ((idadeUm + idadeDois + idadeTres + idadeQuatro + idadeCinco) / 5).toFixed(2)

// Mostra os dados na tela
alert(`A média de idade é ${mediaIdade} e a pessoa com maior idade é ${nomeMaior} com ${maiorIdade} anos de idade.`)

