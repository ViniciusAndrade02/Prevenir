let fila=[]

let nome,anos

for(i=1;i<21;i++){

    nome=prompt("Digite o nome do aluno: ")
    anos=Number(prompt("Digite a idade desse aluno:"))
    
    if(anos<25){

        fila.unshift(nome)

    }else if(anos>=25){

        fila.push(nome)
    }
    
}

alert(fila)