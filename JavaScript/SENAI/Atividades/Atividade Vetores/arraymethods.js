// Método concat()

let frutas = ['goiaba', 'uva', 'abacaxi']
let verduras = ['pepino', 'pimenta', 'salsa']
let ortifrutis = []

ortifrutis = verduras.concat(frutas)

alert(ortifrutis)

// Métodos indexOf() e lastIndexOf() 

//             0  1  2  3  4  5  6   7    8 
let numeros = [8, 2, 8, 2, 8, 7, 12, 8, 12]
let numeroPesquisa, indiceNumeroPrimeira, indiceNumeroUltima

    numeroPesquisa = Number(prompt("Qual número quer saber? "))

    indiceNumeroPrimeira = numeros.indexOf(numeroPesquisa)
    indiceNumeroUltima = numeros.lastIndexOf(numeroPesquisa)

alert(`Primeira posição encontrada: ${indiceNumeroPrimeira}\nÚltima posição encontrada: ${indiceNumeroUltima}`)


// Método BRUXÃO de pesquisa
//                  0  1  2  3  4  5  6   7   8 
let vetorNumeros = [8, 2, 8, 2, 8, 7, 12, 8, 12]
let pesquisaNumero, vetorPos = []

    pesquisaNumero = Number(prompt("Qual número quer saber? "))

    for(i=0; i < vetorNumeros.length; i++){

        if(pesquisaNumero === vetorNumeros[i]){

            vetorPos.push(i)

        }

    }

    alert(`Posições encontradas: ${vetorPos}.`)










