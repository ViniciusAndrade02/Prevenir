/* Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let valorMoeda
let moedaUm = 0, moedaCinco = 0, moedaDez = 0, moedaVinteCinco = 0, moedaCinquenta = 0
let totalMoedas = 0 

    while(valorMoeda != 0){

        valorMoeda = Number(prompt("Digite o valor da moeda:"))

        switch(valorMoeda){

            case 1:

                totalMoedas += 1
                moedaUm++
                break

            case 5:

                totalMoedas += 5
                moedaCinco++
                break

            case 10:

                totalMoedas += 10
                moedaDez++
                break

            case 25:

                totalMoedas += 25
                moedaVinteCinco++
                break

            case 50:

                totalMoedas += 50
                moedaCinquenta++
                break

        }

    }

    alert(`Valor Total: R$${totalMoedas} centavos.\n\nMoedas de 1 centavo: ${moedaUm}\nMoedas de 5 centavos: ${moedaCinco}\nMoedas de 10 centavos: ${moedaDez}\nMoedas de 25 centavos: ${moedaVinteCinco}\nMoedas de 50 centavos: ${moedaCinquenta}.`)
