let altura,escalada=0, falta

altura= 8848- 5360

console.log(altura)

for(i=1;i<9;i++){

    escalada+=Number(prompt(`Dia ${i}\nAltitude em metros escalada no dia: `))

    if(escalada>altura){

        alert(`Chegasse ao Destino\nDemorasse ${i} dias!!!`)
        break
    }

}

if(escalada<altura){

    falta= altura-escalada
    alert(`Você deve voltar, pois corre risco de ficar sem oxigênio\nPois ainda faltam: ${falta} km `)
}

