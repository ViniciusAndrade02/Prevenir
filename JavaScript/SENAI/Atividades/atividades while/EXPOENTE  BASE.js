let base, expoente, resultado=1 //4.4.4

base=Number(prompt("Digite a base de um número: "))
expoente=Number(prompt("Digite o expoente da base: "))


if(base<=expoente){
    for(i=0 ; i<expoente ;i++){

        resultado*=base
        

}
}else if(base>expoente){

    for(i=0 ; i<expoente ;i++){

        resultado*=base
        

}
}

alert(`Base: ${base}\nExpoente: ${expoente}\nResultado é: ${resultado}`)