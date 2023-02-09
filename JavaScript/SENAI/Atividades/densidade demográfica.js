/* Criar um programa para calcular a densidade demográfica(habitantes por quilômetro quadrado) de uma região.
 Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados). Mostrar mens
 agens para densidade alta (maior ou igual a 100),média (entre 25 e 100), baixa (menor que 25).*/

 alert("Programa serve para calcular a densidade demográfica(habitantes por km²")

 populacao=prompt("Digite a quantidade de habitantes: ")
 area=prompt("Digite a area(m²) da cidade: ")
 densidade=populacao/area

    if(densidade<25){

    alert(`Densidade baixa, pois a densidade é ${densidade} km²`)

    }else
    if(densidade>=25 && densidade<100){

        alert(`Densidade média,pois a densidade é ${densidade} km²`)

    }else 
    if(densidade>100){

        alert(`Densidade alta,pois a densidade é ${densidade} km²`)

    }



