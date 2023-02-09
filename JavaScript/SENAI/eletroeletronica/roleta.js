let palpite=[] 

let sorteado, perguntar , jogar

jogo()
function jogo(){

    jogar=prompt("Eai, topa jogar um jogo? (Sim) ou (Não)").toLowerCase()

    switch(jogar){

    case 'sim':

        palpite=[]
        play()
        jogo()
        break;

    case 'nao':
        
    alert("VAI EMBORA")
    }
}



function play(){


    for(i=1;i<6;i++){


        perguntar=Number(prompt("Digite seu palpite (1 a 50):"))
    
        if(perguntar>50){
    
            alert("Palpite inválido.Digite dentro da faixa de aposta")
            i=i-1
        }else if(perguntar<=50){
    
            if(palpite.includes(perguntar)==true){
    
                alert("Palpite já foi registrado...tente outro")
                i=i-1
            }else{
    
                palpite.push(perguntar)            
            }
    }
    }
        alert(`Seus palpites foram: ${palpite}`)

        sorteado=Math.floor(Math.random() * 50)+1
    
    if(palpite.includes(sorteado)==true){
    
        alert(`O número sorteado foi: ${sorteado}\nSeus palpites: ${palpite}\nParabén ganhasse :)`)
    }else{
    
        alert(`O número sorteado foi: ${sorteado}\nSeus palpites: ${palpite}\nPerdesse seu lixo`)
    }
    


}