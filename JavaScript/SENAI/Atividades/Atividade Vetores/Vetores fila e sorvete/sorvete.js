let sorvete=[]
let escolher,perguntar 

menu()

function menu(){

    escolher=Number(prompt("=========== MENU ===========\n\n(1)Adicionar Sabor\n(2)Remover Sabor\n(3)Visualizar Sorvete\n(4)Finalizar Pedido"))

    switch(escolher){

        case 1:

        adicionar()
        menu()
        break;

        case 2:

        remover()
        menu()
        break;

        case 3:

        ver()
        menu()
        break;

        case 4:

        realizado()

    }


}


function adicionar(){

    if(sorvete.length<4){

        perguntar=prompt("Qual sabor queres: ")
        sorvete.push(perguntar)
        alert("Sabor adicionado")
    }else if(sorvete.length>=4){

        alert("Limite de sabores atingido, remova um sabor!")
    }

}


function remover(){

    if(sorvete==""){

        alert("Não existem sabores adicionados!")
    }else{

        sorvete.pop()
        alert("Sabor removido")
    }
}

function ver(){


    if(sorvete.length==1){

        alert(`Camada 1-Sabor ${sorvete[0]}`)
    }

    if(sorvete.length==2){

        alert(`Camada 1-Sabor ${sorvete[0]}\nCamada 2-Sabor ${sorvete[1]}`)
    }

    if(sorvete.length==3){

        alert(`Camada 1-Sabor ${sorvete[0]}\nCamada 2-Sabor ${sorvete[1]}\nCamada 3-Sabor ${sorvete[2]}`)
    }

    if(sorvete.length==4){

        alert(`Camada 1-Sabor ${sorvete[0]}\nCamada 2-Sabor ${sorvete[1]}\nCamada 3-Sabor ${sorvete[2]}\nCamada 4-Sabor ${sorvete[3]}`)
    }

    if(sorvete.length==0){

        alert("Adicione um sabor ")
    }
}

function realizado(){

    if(sorvete.length==0){

        alert("Adicione pelo menos um sabor!")
        menu()
    }else{

        alert("Pedido realizado")
    }
}