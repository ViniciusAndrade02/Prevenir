//Criar um sistema que receba os dados do usuário como pessoa (nome, nacionalidade, sexo e idade) para sinalizar se ele pode se cadastrar no sistema do governo brasileiro. Ao final mostrar mensagens para o usuário, indicando se ele pode se cadastrar ou não. Os seguintes critérios são adotados para o aceite de cadastro:

/*(1,0) O usuário deve ser brasileiro, do sexo masculino e ter entre 18 e 70 anos.
(1,0) O usuário deve ser brasileiro, do sexo feminino e ter entre 18 e 60 anos.
(1,0) O usuário, caso não seja brasileiro, deve morar no Brasil a mais de 5 anos e ter entre 21 e 35 anos.*/

nome=prompt("Digite seu nome: ")
nacionalidade= prompt("Digite sua nacionalidade: ").toLowerCase()
sexo=prompt("Digite seu sexo: ").toLowerCase()
idade=Number(prompt("Digite sua idade: "))

    if(nacionalidade=="brasileiro" && sexo=="masculino" && idade>=18 && idade<=70){

        alert(`O ${nome} poderá se cadastrar no sistema do governo Brasileiro`)

    }else if(nacionalidade=="brasileiro" && sexo=="feminino" && idade>=18 && idade<=60){

        alert(`A ${nome} poderá se cadastrar no sistema do governo Brasileiro`)

    }else if( idade>=21 && idade<=35){

        moralidadebrasil=Number(prompt("Digite quantos anos moras no Brasil: "))

            if(moralidadebrasil>5){

                    alert(`O ${nome} poderá se cadastrar no sistema do governo Brasileiro`)

            }else if(moralidadebrasil<=5){

                alert(`O ${nome} não poderá se cadastrar no sistema do governo Brasileiro`)
            }

    }