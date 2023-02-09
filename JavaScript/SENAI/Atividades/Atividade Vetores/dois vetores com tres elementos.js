//4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let fruta=["cereja","abacaxi","morango"]
let xadrez=["cavalo","bispo","rei"]

let fusao=[]

fusao=fruta.concat(xadrez)

alert(`Vetor 1: ${fruta}\nVetor 2: ${xadrez}\nFUSÃO: ${fusao}`)

