Repetição()

function Repetição(){

alert("Bem-Vindo.\nEscolha um dos serviçoes: \n(A) Falar com a atendente\n(B) Falar com RU \n(C) Falar com gerente \n(D) Sair")

serviço=prompt("Digite o serviço desejado: ").toUpperCase()

    switch(serviço){

        case 'A':

            alert("Atendente sendo solicitado,aguarde por favor!")
            Repetição()
            break;
            
        case 'B':

            alert("Ru sendo solicitado,aguarde por favor")
            Repetição()
            break;

        case 'C':

            alert("Gerente sendo socilitado,aguarde por favor")
            Repetição()
            break;

        case 'D':

            alert("SAI DAQUI DESGRAÇA")
            break;
    }
}