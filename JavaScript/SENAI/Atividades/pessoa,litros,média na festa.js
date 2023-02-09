pessoa=Number(prompt("Digite quantas pessoas tinham na festa: "))
litros=Number(prompt("Digite quantos litros de chopp foram comprados: "))
disperdicados=Number(prompt("Digite quantos litros de chopp disperdiçados: "))
sobrou=Number(prompt("Digite quantos chopp sobrou: "))

totallitros= litros-disperdicados-sobrou
media=litros/pessoa

alert(`A média de litros bebidos por pessoa na festa foi: ${media}.`)