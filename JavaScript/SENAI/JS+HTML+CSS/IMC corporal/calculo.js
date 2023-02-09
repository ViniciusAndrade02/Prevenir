let numeroum=document.getElementById("peso")
let numerodois=document.getElementById("altura")


function  operacao(){

alert( (Number(numeroum.value) / (Number(numerodois.value) * Number(numerodois.value))).toFixed(3) )

}