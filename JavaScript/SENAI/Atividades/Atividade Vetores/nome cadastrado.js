/*1) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/

let nome=['naruto','goku','Genkai','Kira']
let principal, cadastrar , excluir, perguntaeditar, editar, cadastrado, encontrado



menu()
function menu(){

    principal=Number(prompt(`======== MENU ========\n1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4- Pesquisar se um nome está cadastrado\n5- Listar todos os nomes cadastrados\n0- Sair do programa`))

    

    switch(principal){

        case 1:

        cadastrar=prompt("Digite seu nome: ").toLowerCase()
        nome.push(cadastrar)
        menu()
        break;

        case 2:

        excluir=prompt("Digite o nome que queres editar: ").toLowerCase()

            for(i=0;i<nome.length;i++){

                if(excluir == nome[i]){

                    nome.splice(nome.indexOf(nome[i]),1)

                    alert("Excluído com sucesso")
                    //alert(nome[i])    nome certo
                    //alert(nome.indexOf(nome[i])) posicao nome certo
                
                }

            }


        menu()
        break;


        case 3:

        perguntaeditar=prompt("Qual nome queres mudar: ").toLowerCase()
        encontrado=nome.includes(perguntaeditar)

        if(encontrado==true){
        editar=prompt("Edite o nome: ")

            for(i=0;i<nome.length;i++){

                if(perguntaeditar == nome[i]){

                        nome.splice(nome.indexOf(nome[i]),1,editar)

                        alert("Editado com sucesso")

                }
            }
        }else if(encontrado==false){

            alert("Nome não foi cadastrado...por isso não poderá ser editado")
        }
        menu()
        break;

        
        case 4:


        cadastrado=prompt("Digite o nome para saber que já foi cadastrado: ")
        encontrado=nome.includes(cadastrado)
           
            if(encontrado==true){

                alert("Nome já cadastrado")

            }else if(encontrado==false){

                alert("Nome não foi cadastrado")
            }

        menu()
        break;

        case 5:

        alert(`${nome}`)
        menu()
        break;


        case 0:

        alert("VAI EMBORA DESGRAÇA\nVolte sempre :)")
    }

}

