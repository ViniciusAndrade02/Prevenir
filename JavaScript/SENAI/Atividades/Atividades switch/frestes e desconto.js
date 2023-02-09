//5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.

alert("Bem-vindo a Loja de comércio")
compra=Number(prompt("Digite o valor da compra: "))

const frete = 12.50
ValorTotal20desconto= compra-(20/100*compra)
ValorTotal10desconto= compra-(10/100*compra)

alert("Selecione a sua assinatura: \n(1) Assinante premium,ganha 20% de desconto e frete grátis.\n(2) Assinante Gold, ganha 20% de desconto mas paga frete.\n(3) Assinante Silver, ganha 10% de desconto mas paga frete.\n(4) Não assinante, sem benefícios.")

escolha=Number(prompt("Digite o número correspondente a sua assinatura: "))

switch(escolha){

    case 1:

        alert(`Assinante Premium\nValor da compra: R$ ${compra}\nDesconto(20%) e frete grátis: R$ ${ValorTotal20desconto}`)
        break;


    case 2:

        valor2=ValorTotal20desconto+ frete

        alert(`Assinatura Golden\nValor da compra: R$ ${compra}\nDesconto(20%) com frete: ${valor2}`)
        break;


    case 3:

        valor3=ValorTotal10desconto+ frete

        alert(`Assinante Silver\nValor da compra: R$ ${compra}\nDesconto(10%) com frete: ${valor3}`)
        break;


    case 4:

        valor4=compra+ frete

        alert(`Valor da compra: R$ ${compra}\nSem desconto com frete: ${valor4}`)
        break;

}

