let coisas={

    fruta:[],
    carro:[],
    anime:[],
    musica:[],


}

for(i=0;i<4;i++){

    perguntar=prompt("Digite um anime:")
    coisas.anime.push(perguntar)
}

for(i=0;i<coisas.anime.length;i++){

    alert(coisas.anime[i])
}

