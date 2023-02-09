let multa, valor=0, pontos=0

multa=Number(prompt("Digite o número de multas que deseja cadastrar: "))

for(i=1; i<multa+1; i++){

valor+=Number(prompt(`Multa ${i}\nDigite o valor da multa: `))
pontos+=Number(prompt(`Multa ${i}\nDigite quantos pontos vale essa multa: `))


}
if(pontos<21){

    alert(`Valor total das multas: R$ ${valor}\nValor total dos pontos: R$ ${pontos}\nVocê está regular`)

}else if(pontos>=21){

    alert(`Valor total das multas: R$ ${valor}\nValor total dos pontos: R$ ${pontos}\nVocê está irregular`)

}