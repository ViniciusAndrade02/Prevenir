let cadastro=document.getElementById("DigitarCadastrar")
let apagarcadastro=document.getElementById("DigitarCadastrar")

let excluir=document.getElementById("DigitarExcluir")
let apagarexcluir=document.getElementById("DigitarExcluir")

let perguntaeditar=document.getElementById("DigitarMudar")
let apagarperguntaeditar=document.getElementById("DigitarMudar")
let editar=document.getElementById("DigitarEditar")
let apagareditar=document.getElementById("DigitarEditar")
 

let encontrado=document.getElementById("DigiteVerificar")
let apagarencontrado=document.getElementById("DigiteVerificar")



let nome=[]


function cadastrando(){

    nome.push(cadastro.value)
    alert("Nome cadastrado")
    apagarcadastro.value=""
    

}

function listamento(){

    alert(nome.join('\n'))
}

function excluimento(){


    if(nome.includes(excluir.value)==true){

        for(i=0;i<nome.length;i++){

            if(excluir.value == nome[i]){

                nome.splice(nome.indexOf(nome[i]),1)

                alert("Excluído com sucesso")
                //alert(nome[i])    nome certo
                //alert(nome.indexOf(nome[i])) posicao nome certo
        
        }
        
    }
    }else if(nome.includes(excluir.value)==false){
        alert("Nome não foi cadastrado")
    }

    apagarexcluir.value=""
}

function editadaco(){


    if(nome.includes(perguntaeditar.value)==true){
            for(i=0;i<nome.length;i++){

                if(perguntaeditar.value == nome[i]){

                        nome.splice(nome.indexOf(nome[i]),1,editar.value)

                        alert("Editado com sucesso")

                }
            }
        }else if(nome.includes(perguntaeditar.value)==false){

            alert("Nome não foi cadastrado...por isso não poderá ser editado")
        }
        apagareditar.value=""
        apagarperguntaeditar.value=""
}


function verificacion(){

     if(nome.includes(encontrado.value)==true){

        alert("Nome já cadastrado")
     }else if(nome.includes(encontrado.value)==false){
        alert("Nome não foi cadastrado")
     }

     apagarencontrado.value=""

}