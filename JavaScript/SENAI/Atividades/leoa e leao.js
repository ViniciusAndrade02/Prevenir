leao=Number(prompt("Digite quantos leões existem no território: "))
leoa=Number(prompt("Digite quantas leoas existem no território: "))
casal=Number(prompt("Digite quantos casais de leões tem nesse território: "))
areacasal=casal*400
areasemcasal=(leoa-casal)*320
total=areacasal+areasemcasal

alert(`No território existem: \n${leao} leões, ${leoa} leoas,${casal} casais de leão\n
Soma geral na área dominada é: ${total} km²`)

//Programa está mal formulado, porque está baseado em resultados de leao e leoa já pré-
//-estabelecidos
