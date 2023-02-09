let numero=[]
let digite, primeirametade=0, segundametade=0, total=0


for(i=1;i<11;i++){

digite=Number(prompt("Digite algum valor: "))
numero.push(digite)

}

for(i=0; i<numero.length/2;i++){

primeirametade+=numero[i]

}

for(i=9;i>numero.length/2-1;i--){

segundametade+=numero[i]
  
    
}

alert(`Número escolhidos: ${numero}\nSoma primeira metade: ${primeirametade}\nSoma segunda metade: ${segundametade}\n`)
alert(`Soma da primeira metade MENOS soma da segunda metade é: ${primeirametade - segundametade}`)