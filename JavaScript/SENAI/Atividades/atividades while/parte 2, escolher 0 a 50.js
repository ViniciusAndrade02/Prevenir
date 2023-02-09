let escolha
let maior=0 , menor=50 , lixo=0

alert("Escolha 10 números de: 0 a 50")

for(i=1; i<11;i++){

escolha=Number(prompt(`Número ${i}\nEscolha um número: `))

if(escolha>50){

    lixo=escolha

}else if(escolha<=50){

    if(escolha>maior){

        maior=escolha
    
    }
}
if(escolha<menor){

    menor=escolha

}
}

alert(`O maior número: ${maior}\nO menor número: ${menor}`)