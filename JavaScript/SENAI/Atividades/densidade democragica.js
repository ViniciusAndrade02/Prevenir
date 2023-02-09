alert("Programa serve para calcular a densidade demográfica(habitantes por km²")

populacao=prompt("Digite a qauntidade de habitantes: ")
area=prompt("Digite a area(m²) da cidade: ")
densidade=populacao/area

   if(densidade<25){

   alert(`Densidade baixa, pois a densidade é ${densidade}`)

   }else
   if(densidade>=25 && densidade<100){

       alert(`Densidade média,pois a densidade é ${densidade}`)

   }else 
   if(densidade>100){

       alert(`Densidade alta,pois a densidade é ${densidade}`)

   }