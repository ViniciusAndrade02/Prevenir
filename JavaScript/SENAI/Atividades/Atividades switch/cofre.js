//Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.

alert("Cofrinho Digital")
money=0
A=0 , B=0, C=0, D=0
dindin()

function dindin(){

        cofre=(prompt("Digite o número desejado para armazenar:\n(A) 1 centavo\n(B) 5 centavos\n(C) 10 centavos \n(D) 50 centavos\n(E) Dinheiro ")).toUpperCase()

        switch(cofre){

            case 'A':

            money=money + 0.1
            A=A + 1
            dindin()
            break;

            case 'B':

            money=money + 0.5
            B=B + 1
            dindin()
            break;

            case 'C':

            money=money + 0.10
            C=C + 1
            dindin()
            break;

            case 'D':

            money=money + 0.50
            D=D + 1
            dindin()
            break;
            
            case 'E':
            
            alert(`Nesse cofrinho quardasse:\n${A} moedas de R$ 0.01\n${B} moedas de R$ 0.05\n${C} moedas de R$ 0.10\n${D} moedas de R$ 0.50\nTens aculumulado: R$ ${money}`)
        }
}
