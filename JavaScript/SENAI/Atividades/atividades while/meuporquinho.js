/* Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let cofre, total=0 

let um=0, cinco=0, dez=0, vientecinco=0, cinquenta=0

while( cofre != 0 ){

    cofre=Number(prompt("Digite o valor das moedas: "))

    switch(cofre){

    case 1:

        total += 1
        um++
        break;

    case 5:

        total += 5
        cinco++
        break;

    case 10:

        total += 10
        dez++
        break;

    case 25:

        total +=25
        vientecinco++
        break;

    case 50:

        total +=50
        cinquenta++
        break;

    }

    
}

alert(`Histórico do cofre:\n${um} moeda de R$ 0.01\n${cinco} moeda de R$ 0.05\n${dez} moeda de R$ 0.10\n${vientecinco} moeda de R$ 0,25\n${cinquenta} moeda de 0.50\nTotal juntado foi ${total}`)
