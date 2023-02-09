let numeros, soma=0
let impares=[]

for(i=0; i<5;i++){

numeros=Number(prompt("Digite algum número: "))

if(numeros %2==1){

    impares.push(numeros)
    soma+=numeros
}
}

alert(`Listas dos números ímpares: ${impares}\nSoma deles: ${soma}`)