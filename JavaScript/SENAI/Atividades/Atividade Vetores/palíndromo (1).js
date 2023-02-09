/* Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e/ou com palavras). */

let numeros = []
let numeroAdd

    for(i=0; i < 6; i++){

        numeroAdd = Number(prompt("Digite um número: "))
        numeros.push(numeroAdd)

    }


    let j = 5
    let palindromo = 0

    for(i=0; i < 3; i++){

        if(numeros[i] != numeros[j]){

            palindromo = 1

        }

        j--

    }

    if(palindromo == 1){

        alert("Não é palíndromo!")

    }else{

        alert("É palíndromo! :D")

    }
