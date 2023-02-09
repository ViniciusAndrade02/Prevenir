let cal=document.getElementById('valor')
let mostrar= document.getElementById('numero')

let dobro

function calcular(){
mostrar.innerHTML=""

dobro=cal.value *2   //dobrar
mostrar.innerHTML+=dobro //mostrar o resultado
cal.value=""  //apagar o numero digitado

}