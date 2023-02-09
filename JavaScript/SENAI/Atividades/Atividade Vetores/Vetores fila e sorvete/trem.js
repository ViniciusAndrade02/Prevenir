let distancia=[764,350,292,242]
let origem,destino,soma=0

origem=Number(prompt("ORIGEM:\n\n(1)Bruxelas\n(2)Berlim\n(3)Praga\n(4)Viena\n(5)budapeste "))
destino=Number(prompt("DESTINO:\n\n(1)Bruxelas\n(2)Berlim\n(3)Praga\n(4)Viena\n(5)budapeste "))

if(destino>origem){

    for(i=origem-1;i<destino-1;i++)

    soma+=distancia[i]

}
if(origem>destino){
    switch(destino){
        case 1:

            for(i=origem-2;i>=0;i--){

                soma+=distancia[i]

            }
            break
        case 2:
            for(i=origem-2;i>=1;i--){

                soma+=distancia[i]

            }
            break

        case 3:
            for(i=origem-2;i>=2;i--){

                soma+=distancia[i]

            }
            break

        case 4:
        for(i=origem-2;i>=3;i--){

            soma+=distancia[i]

        }
    }
}
alert(`Distância total (km) da viagem: ${soma} km`)