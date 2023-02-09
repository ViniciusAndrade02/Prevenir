let pessoa, maiorIdade=0, maiorNome, idade=0, media=0,resultadoMedia

for(i=0 ; i<2 ; i++){

    pessoa=prompt("Digite seu nome: ")
    idade=Number(prompt("Digite sua idade: "))

    media=idade+media

    if(idade>maiorIdade){

        pessoa=maiorNome
        idade=maiorIdade

    }



}
resultadoMedia=media/2


alert(`${maiorNome} possui maior idade: ${maiorIdade}\n\nA média entre as idade ${resultadoMedia}`)