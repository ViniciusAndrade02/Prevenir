
alert(">>>>>Bem-Vindos ao quiz com Perguntas mais inexperadas<<<<<\n\nEsse quiz terá 3 perguntas aleátorias e com 4 alternativas :)\n\nBoa sorte :D")

a=0,b=0,c=0,d=0


pergunta1=prompt("Quais séries a seguir englobam melhor a temática de vampiros e assombração?\nA)Van Helsing (3 pontos)\nB)Castlevania (3 pontos)\nC) The Vampire Diaries (2 pontos)\nD) Blade: The Series (1 ponto)").toUpperCase()

switch(pergunta1){

    case 'A':

    a=a+3
    alert("3 pontos")
    break;

    case 'B':

    b=b+3
    alert("3 pontos")
    break;

    case 'C':

    c=c+2
    alert("2 pontos")
    break;

    case 'D':

    d=d+1
    alert("1 ponto")
    break;

    default:

    alert("0 pontos")
    break;

    
}

pergunta2=prompt("Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas (3 pontos\nB) O Hobbit (2 pontos)\nC) A Fantástica Fábrica de Chocolates (3 pontos)\nD) Coraline (2 pontos)").toUpperCase()

switch(pergunta2){

    case 'A':

    a=a+3
    alert("3 pontos")
    break;
    
    case 'B':
    
    b=b+2
    alert("2 pontos")
    break;
    
    case 'C':
    
    c=c+3
    alert("3 pontos")
    break;
    
    case 'D':
    
    d=d+2
    alert("2 pontos")
    break;

    default:

    alert("0 pontos")
    break;
}

pergunta3=prompt("3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\nA) The Legend of Zelda (3 pontos\nB) Kirby (2 pontos\nC) Metroid (2 pontos)\nD) Super Mario Bros (4 pontos)").toUpperCase()

switch(pergunta3){

    case 'A':

    a=a+3
    alert("3 pontos")
    break;
    
    case 'B':
    
    b=b+2
    alert("2 pontos")
    break;
    
    case 'C':
    
    c=c+2
    alert("2 pontos")
    break;
    
    case 'D':
    
    d=d+4
    alert("4 pontos")
    break;

    default:

    alert("0 pontos")
    break;

}

total=a+b+c+d

switch(true){

    case total==10:

        alert(`Parabéns,Gabaritasse esse Quiz Aleatório!!!\nConsequisse ${total} pontos`)
        break;

    case total<10:

        alert(`Consequisse ${total} pontos!!!`)
        break;
}