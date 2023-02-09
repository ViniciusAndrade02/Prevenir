let numero

    numero = Number(prompt("Digite um numero: "))

    switch(true){

        case numero > 10:
        
            alert("O número é maior que 10!")
            break

        case numero <= 10 && numero >= 5:

            alert("O número encontra-se na faixa de 5 a 10!")
            break

        default:

            alert("O número está abaixo de 5!")

    }