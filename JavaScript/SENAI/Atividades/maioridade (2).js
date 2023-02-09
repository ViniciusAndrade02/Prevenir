/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)*/

let nome, idade, nomeMaior, maiorIdade = 0, somaIdades = 0, media

    for(i=0; i < 5; i++){

        nome = prompt("Digite um nome: ")
        idade = Number(prompt("Digite uma idade: "))

        somaIdades = somaIdades + idade

        if(idade > maiorIdade){

            maiorIdade = idade
            nomeMaior = nome

        }

    }

    media = somaIdades / 5

alert(`A media das idades é ${media}. A pessoa ${nomeMaior} tem a maior idade com ${maiorIdade} anos de idade.`)