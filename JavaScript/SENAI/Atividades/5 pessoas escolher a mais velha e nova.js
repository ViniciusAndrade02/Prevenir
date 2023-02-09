nome1=(prompt("Digite o nome da primeira pessoa: "))
idade1=Number(prompt("Digite a idade: "))

nome2=(prompt("Digite o nome da segunda pessoa: "))
idade2=Number(prompt("Digite a idade: "))

nome3=(prompt("Digite o nome da terceira pessoa: "))
idade3=Number(prompt("Digite a idade: "))

nome4=(prompt("Digite o nome da quarta pessoa: "))
idade4=Number(prompt("Digite a idade: "))

nome5=(prompt("Digite o nome da quinta pessoa: "))
idade5=Number(prompt("Digite a idade: "))

alert(`Relatório:  \n${nome1},${idade1} anos\n${nome2},${idade2} anos\n${nome3},${idade3} anos\n${nome4},${idade4} anos\n${nome5},${idade5} anos`)

    if(idade1>idade2 && idade1>idade3 && idade1>idade4 && idade1>idade5){

            if(idade2<idade3 && idade2<idade4 && idade2<idade5){

                alert(`O ${nome1} possui ${idade1} anos,e é o mais velho\nO ${nome2} possui ${idade2} anos,e é o mais novo`)
        }
            else if(idade3<idade2 && idade3<idade4 && idade3<idade5){

                alert(`O ${nome1} possui ${idade1} anos,e é o mais velho\nO ${nome3} possui ${idade3} anos,e é o mais novo`)
        }
            else if(idade4<idade2 && idade4<idade3 && idade4<idade5){

                alert(`O ${nome1} possui ${idade1} anos,e é o mais velho\nO ${nome4} possui ${idade4} anos,e é o mais novo`)
        }
            else if(idade5<idade2 && idade5<idade3 && idade5<idade4){

                alert(`O ${nome1} possui ${idade1} anos,e é o mais velho\nO ${nome5} possui ${idade5} anos,e é o mais novo`)
        }

}
    else if(idade2>idade1 && idade2>idade3 && idade2>idade4 && idade2>idade5){

            if(idade1<idade3 && idade1<idade4 && idade1<idade5){

                alert(`O ${nome2} possui ${idade2} anos,e é o mais velho\nO ${nome1} possui ${idade1} anos,e é o mais novo`)
        }
            else if(idade3<idade1 && idade3<idade4 && idade3<idade5){

                alert(`O ${nome2} possui ${idade2} anos,e é o mais velho\nO ${nome3} possui ${idade3} anos,e é o mais novo `)
        }
            else if(idade4<idade1 && idade4<idade3 && idade4<idade5){

                alert(`O ${nome2} possui ${idade2} anos,e é o mais velho\nO ${nome4} possui ${idade4} anos,e é o mais novo `)
        }
            else if(idade5<idade1 && idade5<idade3 && idade5<idade4){

                alert(`O ${nome2} possui ${idade2} anos,e é o mais velho\nO ${nome5} possui ${idade5} anos,e é o mais novo `)
        }


}
    else if(idade3>idade1 && idade3>idade2 && idade3>idade4 && idade3>idade5){

            if(idade1<idade2 && idade1<idade4 && idade1<idade5){

                alert(`O ${nome3} possui ${idade3} anos,e é o mais velho\nO ${nome1} possui ${idade1} anos,e é o mais novo`)
        }
            else if(idade2<idade1 && idade2<idade4 && idade2<idade5){

                alert(`O ${nome3} possui ${idade3} anos,e é o mais velho\nO ${nome2} possui ${idade2} anos,e é o mais novo`)
        }
            else if(idade4<idade1 && idade4<idade2 && idade4<idade5){

                alert(`O ${nome3} possui ${idade3} anos,e é o mais velho\nO ${nome4} possui ${idade4} anos,e é o mais novo`)
        }
            else if(idade5<idade1 && idade5<idade2 && idade5<idade4){

                alert(`O ${nome3} possui ${idade3} anos,e é o mais velho\nO ${nome5} possui ${idade5} anos,e é o mais novo`)
        }


}
    else if(idade4>idade1 && idade4>idade2 && idade4>idade3 && idade4>idade5){

            if(idade1<idade2 && idade1<idade3 && idade1<idade5){

                alert(`O ${nome4} possui ${idade4} anos,e é o mais velho\nO ${nome1} possui ${idade1} anos,e é o mais novo`)
        }
            else if(idade2<idade1 && idade2<idade3 && idade2<idade5){

                alert(`O ${nome4} possui ${idade4} anos,e é o mais velho\nO ${nome2} possui ${idade2} anos,e é o mais novo`)
        }
            else if(idade3<idade1 && idade3<idade2 && idade3<idade5){

                alert(`O ${nome4} possui ${idade4} anos,e é o mais velho\nO ${nome3} possui ${idade3} anos,e é o mais novo`)
        }
            else if(idade5<idade1 && idade5<idade2 && idade5<idade3){

                alert(`O ${nome4} possui ${idade4} anos,e é o mais velho\nO ${nome5} possui ${idade5} anos,e é o mais novo`)
        }


}   else if(idade5>idade1 && idade5>idade2 && idade5>idade3 && idade5>idade4){

            if(idade1<idade2 && idade1<idade3 && idade1<idade4){

                alert(`O ${nome5} possui ${idade5} anos,e é o mais velho\nO ${nome1} possui ${idade1} anos,e é o mais novo `)
        }
            else if(idade2<idade1 && idade2<idade3 && idade2<idade4){

                alert(`O ${nome5} possui ${idade5} anos,e é o mais velho\nO ${nome2} possui ${idade2} anos,e é o mais novo `)
        }
            else if(idade3<idade1 && idade3<idade2 && idade3<idade4){

                alert(`O ${nome5} possui ${idade5} anos,e é o mais velho\nO ${nome3} possui ${idade3} anos,e é o mais novo `)
        }
            else if(idade4<idade1 && idade4<idade2 && idade4<idade3){

                alert(`O ${nome5} possui ${idade5} anos,e é o mais velho\nO ${nome4} possui ${idade4} anos,e é o mais novo `)
        }

}



