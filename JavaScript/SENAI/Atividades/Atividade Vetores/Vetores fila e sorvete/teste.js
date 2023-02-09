let pai=[34,67,45,79,50] //impar
let mae=[65,32,11,68,09]
let filho=[]




for(i=0;i<5;i++){



    if(i%2!=0){

        filho.push(pai[i])
    }

    if(i%2 ==0){
        filho.push(mae[i])
    }
}

console.log(filho)