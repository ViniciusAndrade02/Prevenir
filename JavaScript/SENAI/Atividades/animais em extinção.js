/* Elaborar um programa que alerte sobre os riscos de animais em extinção.
 O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). 
 Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamen
 te em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Es
 pécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas com
 o "Espécie vulnerável!"*/
 
 alert("Esse programa alerta sobre os riscos de animais em extinção")

 especie=prompt("Digite o nome da espécie: ")
 populacao=Number(prompt("Digite o total de indivíduos: "))

    if(populacao>200 && populacao<=500){

        alert(`a espécie ${especie} está classificada como: Espécie criticamente em perigo!`)

    }else
    if(populacao>500 && populacao<=1000){

        alert(`a espécie ${especie} está classificada como: Espécie em perigo!`)

    }else
    if(populacao>1000 && populacao<=5000){

        alert(`a espécie ${especie} está classificada como: "Espécie vulnerável!"`) 
    }