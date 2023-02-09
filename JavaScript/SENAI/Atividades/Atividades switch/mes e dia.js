alert("Selecione o número desejado para saber os dias de um determinado mês")

alert("(1) Janeiro\n(2) Fevereiro\n(3) Março\n(4) Abril\n(5) Maio\n(6) Junho\n(7) Julho\n(8) Agosto\n(9) Setembro\n(10) Outubro\n(11) Novembro\n(12) Dezembro")

dia=Number(prompt("Digite o número: "))

switch(dia){

    case 1:
        alert("Janeiro possui 31 dias")
        break;
    case 2:
        alert("Fevereiro possui 28 dias")
        break;
    case 3:
        alert("Março possui 31 dias")
        break;
    case 4:
        alert("Abril possui 30 dias")
        break;
    case 5:
        alert("Maio possui 31 dias")
        break;
    case 6:
        alert("Junho possui 30 dias")
        break;
    case 7:
        alert("Julho possui 31 dias")
        break;
    case 8:
        alert("Agosto possui 31 dias")
        break;
    case 9:
        alert("Setembro possui 30 dias")
        break;
    case 10:
        alert("Outubro possui 31 dias")
        break;
    case 11:
        alert("Novembro possui 30 dias")
        break;
    case 12:
        alert("Dezembro possui 31 dias")
        break;
}