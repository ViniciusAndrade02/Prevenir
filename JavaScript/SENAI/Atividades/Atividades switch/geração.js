//Sem Gerao (até 1945)
//Baby Boomers (nascidos entre 1946 e 1964)
//Gerao X (1965-1980)
//Gerao Y ou Millennials (1981-1996)
//Gerao Z (1997-2010)
//Geraco Alfa (a partir de 2011)

ano=Number(prompt("Digite o seu dia de nascimento: "))

switch(true){

    case ano<=1950 :
        alert("Sem Geração!")
        break;
    
    case ano>1946 && ano<=1964:
        alert("Geração Baby Boomers")
        break;
    
    case ano>=1965 && ano <=1980:
        alert("Geração X")
        break;
    
    case ano>=1981 && ano <=1996:
        alert("Geração Y ou Millennials")
        break;
    
    case ano>=1997 && ano <=2010:
        alert("Geração Z")
        break;
    
    case ano>2011:
        alert("Geração alfa")
        break;

}