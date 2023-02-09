/*No site Netshoes, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque, como na página principal, na página da categoria daquele produto, na página de promoções ou se não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba essas avaliações do comprador (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 a 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice acima de 9 (destaque na página principal).

(1,0) Receber as notas da avaliação.
(1,0) Calcular o índice do produto (média).
(1,0) Criar o sistema de destaques com as quatro possibilidades.*/

nome=prompt("Digite o nome do produto: ")
qualidade=Number(prompt("Digite qualidade do produto: "))
beneficio=Number(prompt("Digite o custo benefício: "))
durabilidade=Number(prompt("Digite a durabilidade: "))

índice= ((qualidade+beneficio+durabilidade)/3).toFixed(1)

alert(`Notas e o índice do produto: ${nome}\n\nA nota da Qualidade do Produto: ${qualidade}\nNota do Custo Benefício: ${beneficio}\nNota De Durabilidade: ${durabilidade}\n\nO índice do Produto é: ${índice}`)

switch (true){

    case índice<5:

        alert(`O produto ${nome} está classificado como:\n-Não ganha destaque`)
        break;

    case índice>=5 && índice <=6.9:

        alert(`O produto ${nome} está classificado como:\n-Destaque da página da categoria`)
        break;

    case índice>=7 && índice <=9:

        alert(`O produto ${nome} está classificado como:\n-Destaque da promoção`)
        break;

    case índice>9:

        alert(`O produto ${nome} está classificado como:\n-Destaque na página principal`)
        break;
}

