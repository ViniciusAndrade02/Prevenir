let coresprimarias=[]
let coressecundarias=[]
let primasecunda=[]
let pergunta1, pergunta2, final,inicio

for(i=0;i<3;i++){

    pergunta1=prompt("Digites as três cores primárias: ")
    coresprimarias.push(pergunta1)
}

for(i=0;i<3;i++){

    pergunta2=prompt("Digites as três cores secundárias: ")
    coressecundarias.push(pergunta2)
}

primasecunda=coresprimarias.concat(coressecundarias)

inicio=prompt("Qual cor adicionar no inicio: ")
primasecunda.unshift(inicio)


final=prompt("Qual cor adicionar no final: ")
primasecunda.push(final)

alert(primasecunda)



