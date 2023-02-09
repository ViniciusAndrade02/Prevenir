let entra, sai

retornar()
function retornar(){

    entra=Number(prompt("Digite o número que entra: "))
    sai=Number(prompt("Digite o número que sai(negativo): "))

    vaga=entra+sai
    if(vaga<0){

        alert("Ops, detectamos que colocasse vagas a mais!!!\nPor favor, digite corretamente")
        retornar()
    }else if(vaga>=0 && vaga<=40){

        alert("Vagas selecionadas com sucesso")


    }else if(vaga>40){

        vagaamais=vaga-40
        alert(`não é possível pois ultrapassa a capacidade em ${vagaamais} leitos`)

    }



}

