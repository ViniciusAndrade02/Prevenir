/*4) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

let preco=[], produto=[]
let pergunta1, pergunta2
let A=0,B=[],C=0,media=0


for(i=1;i<6;i++){

pergunta1=prompt(`Produto ${i}\nDigite o nome do produto`)
produto.push(pergunta1)

pergunta2=Number(prompt(`Produto ${i}\nDigite o preço do produto`))
preco.push(pergunta2)

}

for(i=preco.length-1;i>-1;i--){

    if(preco[i]<50){

        A=+1
    }

    if(preco[i]>=50 || preco[i]<=100){

        B.push(produto[i])
    }

    if(preco[i]>100){

        C +=preco[i]
        media+=1
    }
}

alert(`Relatório:\nO produto ${produto[0]} custa: R$${preco[0]}\nO produto ${produto[1]} custa: R$${preco[1]}\nO produto ${produto[2]} custa: R$${preco[2]}\nO produto ${produto[3]} custa: R$${preco[3]}\nO produto ${produto[4]} custa: R$${preco[4]}`)

alert(`Resposta A: ${A}\nResposta B: ${B}\nResposta C: ${C/media}`)