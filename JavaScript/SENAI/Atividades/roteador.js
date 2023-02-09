alert("Login de um Roteador")

usuario=prompt("Digite o nome do usuário: ")
senha=prompt("Digite o Password: ")

    if(usuario=="admin" && senha==123) {

        alert("Login afetuado!")
}
    else if(usuario!="admin" && senha!=123){

        alert(`Login falhou!\nA senha do usuário é: admin, ao invés de: ${usuario}\nA senha é: 123, ao invés de: ${senha}`)
    }
    else if(usuario!="admin" && senha==123){

        alert(`Login falhou!\nA senha do usuário é: admin, ao invés de: ${usuario}\nA senha está correto`)
    }
    else if(usuario="admin" && senha!=123){

        alert(`Login falhou!\nA senha do usuário está correto\nA senha é: 123, ao invés de: ${senha}`)

    }