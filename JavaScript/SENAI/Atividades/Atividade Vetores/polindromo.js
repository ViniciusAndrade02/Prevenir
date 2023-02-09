let numero=[]
let numeroinverso=[]
let escolhernumero ,armazenarnumeroinverso, verificar, verdade=0, quantidade, numeroouletra


numeroouletra=prompt("(SIM) --> Para Palíndromo usando LETRAS\n(NAO) --> Para Palíndromo usando NÚMEROS").toLocaleUpperCase()


if(numeroouletra == "NAO"){
    
quantidade=Number(prompt("Quantos numeros estará no seu Palíndromo: "))

for(i=0;i<quantidade;i++){

    escolhernumero=Number(prompt("Digite os números do seu Palíndromo: "))
    numero.push(escolhernumero)

}

for(i=numero.length-1; i>-1; i--){

    armazenarnumeroinverso=Number(numero[i])
    numeroinverso.push(armazenarnumeroinverso)

}

for(i=0;i<quantidade;i++){

    verificar=Number(numero[i]) === Number(numeroinverso[i])

        if(verificar==true){

        verdade+=1
}
}

if(verdade==quantidade){

    alert(`É um Palíndromo\nNúmeros Digitados: ${numero}\nSeu inverso: ${numeroinverso}`)
}else{

    alert(`Não é Palíndromo\nNúmeros Digitados: ${numero}\nSeu inverso: ${numeroinverso}`)
}
}else if(numeroouletra){


    quantidade=Number(prompt("Quantos numeros estará no seu Palíndromo: "))

for(i=0;i<quantidade;i++){

    escolhernumero=prompt("Digite as palavras do seu Palíndromo: ")
    numero.push(escolhernumero)

}

for(i=numero.length-1; i>-1; i--){

    armazenarnumeroinverso=numero[i]
    numeroinverso.push(armazenarnumeroinverso)

}

for(i=0;i<quantidade;i++){

    verificar=numero[i] === numeroinverso[i]

        if(verificar==true){

        verdade+=1
}
}

if(verdade==quantidade){

    alert(`É um Palíndromo\nLetras Digitados: ${numero}\nSeu inverso: ${numeroinverso}`)
}else{

    alert(`Não é Palíndromo\nLetras Digitados: ${numero}\nSeu inverso: ${numeroinverso}`)
}
}
