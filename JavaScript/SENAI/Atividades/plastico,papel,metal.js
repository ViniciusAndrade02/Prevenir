alert("Bem-Vindo a fábrica de reciclagem de materiais")
plastico=Number(prompt("Digite quantos Kg de plásticos(10 por 10): "))
papel=Number(prompt("Digite quantos Kg de papéis(30 por 30): "))
metal=Number(prompt("Digite quantos Kg de metais(50 por 50): "))

moneyplastico= (plastico/10)*2
moneypapel= (papel/30)*3
moneymetal= (metal/50)*5

total=moneymetal+moneypapel+moneyplastico

alert(`Você receberá na fábrica: R$${total}`)