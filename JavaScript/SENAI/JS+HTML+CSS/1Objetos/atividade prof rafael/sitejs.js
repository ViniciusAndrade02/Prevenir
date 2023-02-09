let subspai=document.getElementById("substituirpai")
let subsmae=document.getElementById("substituirmae")
let subsfilho=document.getElementById("substituirfilho")

let genespai,genesmae


function novo(){

    let pai=[]
    let mae=[]
    let filho=[]

    for(i=1;i<51;i++){

        genespai=Math.floor(Math.random() * 100) + 1;
        pai.push(genespai)

        genesmae=Math.floor(Math.random() * 100) + 1;
        mae.push(genesmae)

    }

    for(i=0;i<50;i++){

        if(i==0){

            filho.push(pai[0])

        }else if(i%2==0){

            filho.push(pai[i])

        }else if(i%2!=0){

            filho.push(mae[i])
        }
 
    }

    subspai.innerHTML=pai
    subsmae.innerHTML=mae
    subsfilho.innerHTML=filho

}