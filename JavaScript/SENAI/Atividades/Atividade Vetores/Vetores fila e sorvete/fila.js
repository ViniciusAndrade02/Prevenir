let fila=[]
let escolher , nome



menu()
function menu(){

    escolher=Number(prompt("=========== MENU ===========\n\n(1)Entrar na fila\n(2)Atendimento concluído\n(3)Lista fila\n(4)Encerramento"))


    switch(escolher){

        case 1:

        entrar()
        menu()
        break;

        case 2:

        concluido()
        menu()
        break;


        case 3:

        lista()
        menu()
        break;

        default:

        alert("VAI EMBORA SEU POBRE")


    }
}


function entrar(){

    if(fila.length<6){

    nome=prompt("Digite seu nome para entrar na fila: ")
    fila.push(nome)
    }else if(fila.length>=6){

        alert("A fila está lotada....aguarde por favor")
    }
}

function concluido(){

    fila.shift()
}

function lista(){

    alert(fila)

}