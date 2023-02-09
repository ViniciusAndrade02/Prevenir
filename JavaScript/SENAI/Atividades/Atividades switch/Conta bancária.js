//4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

alert("Conta Bancária!!!")

saldo= 1000 

Repetição()

function Repetição(){

usuario=Number(prompt("Digite o número da sua conta bancária: "))
escolha=Number(prompt("Escolha o tipo de operação desejada:\n(1) Saldo \n(2) Depósito\n(3) Saque\n(4)Sair"))

switch(escolha){

    case 1:

        alert(`Seu saldo atual é: R$ ${saldo}`)
        Repetição()
        break;

    case 2:

        depositar=Number(prompt("Digite quando queres depositar"))
        saldo=saldo+depositar

        alert(`Seu saldo atual: R$ ${saldo}`)
        Repetição()
        break;

    case 3:

        saque=Number(prompt("Digite o quanto queres sacar: "))

        if(saque>saldo){

            alert("Dinheiro insuficiente para sacar")
            Repetição()

        }
        else if(saque<saldo){

            saldo=saldo-saque
            alert(`Seu saldo atual: R$ ${saldo}`)
            Repetição()

        }

    case 4:

        alert("Sai daqui Desgraça")
        break;

}
}
