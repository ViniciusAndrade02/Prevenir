let op, conta, deposito, saque, saldo = 1000

    conta = prompt("Qual a sua conta? ")

Menu()    

function Menu() {
    

    op = Number(prompt(">>> ESCOLHA A OPERAÇÃO <<<\n\n1) Saldo\n2) Depósito\n3) Saque\n4) Sair\n"))

    switch(op){

        case 1:

            alert(`Saldo atual: R$${saldo}.`)
            Menu()      
            break
        case 2:

            deposito = Number(prompt("Valor depositado? "))
            saldo = saldo + deposito
            alert(`Saldo atual: R$${saldo}`)
            Menu()
            break

        case 3:

        saque = Number(prompt("valor do saque? "))
        
            if(saque <= saldo)
            {

                saldo = saldo - saque
                alert("Transação aprovada!!")
                alert(`Saldo atual: R$${saldo}.`)
        Menu()
        break
            }
            else(saque > saldo)
            {

                 alert("Saldo insuficiente!!")
                 
            }
        Menu()    
        break 
        
        case 4:

            alert("Operação finalizada!")
            break
        default:
            
        alert("ERRO!\nReiniciando operação!!")
        Menu()
        break
    }   
}