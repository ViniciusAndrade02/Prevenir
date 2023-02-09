
let nomes=[]
let senha=[]

let usuario=document.getElementById("cadastro")
let cod1=document.getElementById('senha1')
let cod2=document.getElementById('senha2')

let costumizar
let verificar

function teste(){

 
     
          nomes=JSON.parse(localStorage.getItem("armazenarnome"))
          senha=JSON.parse(localStorage.getItem("armazernarsenha"))

          if(usuario.value==""){

               alert("testeeee")
          }else{
          

if(nomes==null){

     nomes=[]
     senha=[]
     verificar=nomes.includes(usuario.value)

          if(verificar==false){

               if(cod1.value==cod2.value){

                    senha.push(cod1.value)
                    nomes.push(usuario.value)
                    usuario.value=""
                    cod1.value=""
                    cod2.value=""

                    alert("Cadastro feito ")
 
                    localStorage.setItem("armazenarnome",JSON.stringify(nomes))
                    localStorage.setItem("armazernarsenha",JSON.stringify(senha))
 
               }else{
 
               alert("As senhas devem ser iguais")
               cod1.value=""
               cod2.value=""
          }

          }else if(verificar==true){

               alert("Usuário já cadastrado")

                    usuario.value=""
                    cod1.value=""
                    cod2.value=""
     }


}else{


     verificar=nomes.includes(usuario.value)

     if(verificar==false){

          if(cod1.value==cod2.value){

               senha.push(cod1.value)
               nomes.push(usuario.value)
               usuario.value=""
               cod1.value=""
               cod2.value=""

               alert("Cadastro feito")
 
               localStorage.setItem("armazenarnome",JSON.stringify(nomes))
               localStorage.setItem("armazernarsenha",JSON.stringify(senha))
 
          }else{
 
               alert("As senhas devem ser iguais")
               cod1.value=""
               cod2.value=""
          }
     }else if(verificar==true){

          
         alert("Usuário já cadastrado")

         usuario.value=""
         cod1.value=""
         cod2.value=""
     }
}
}
}
