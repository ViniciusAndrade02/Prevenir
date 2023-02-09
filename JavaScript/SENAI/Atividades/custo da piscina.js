alert("Veja quanto vai custar sua piscina")
largura=Number(prompt("Digite a largura(metros) da piscina dos seus sonhos: "))
comprimento=Number(prompt("Digite o comprimento(metros) da sua piscina: "))
metroquadrado= largura*comprimento
totalazulejos=120*metroquadrado
azulejos=(120*metroquadrado)/60
caixaazulejocustototal=45.45*azulejos

alert(`Sua piscina dos sonhos possui dimensão ${largura}x${comprimento}\n
Precisando de ${totalazulejos} de azulejos e cada caixa de 60 unidade de azulejos\ncusta R$45.45, logo custará R$${caixaazulejocustototal} `)