
let Username = document.getElementById("Email")
let Password = document.getElementById("Senha");

let pegarnome=JSON.parse(localStorage.getItem("armazenarnome"))
let pegarsenha=JSON.parse(localStorage.getItem("armazernarsenha"))

function login(){

    if(pegarnome.includes(Username.value)==true){

    for(i=0;i<pegarnome.length;i++){

        if(Username.value==pegarnome[i]){

            if(Password.value==pegarsenha[i]){

                alert("login sucesso")
                window.location.href="https://www.google.com/"
            }else{

                alert("Senha Errada")
            }
        }

    }
}else{

    alert("Usuário não cadastrado")
}
}
