let numero=[4,6,2,3,7,4,2,7,9,5]
let achou=[]
let escolher

escolher=Number(prompt("Qual número deseja procurar: "))

for(i=0;i<numero.length;i++){

    if(escolher===numero[i]){

        achou.push(i)
    }  

}

alert(`O numero procurado foi: ${escolher}\nFoi encontrado nas posições: ${achou}`)