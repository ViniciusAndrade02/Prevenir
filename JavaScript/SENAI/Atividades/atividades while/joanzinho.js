//7) Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

AlturaJoao=1.75

AlturaPedro=1.60


for(i=0;i<8;i++){

    AlturaJoao+=0.01

    AlturaPedro+=0.03
    
    alert(`${i} Anos\nJoao: ${AlturaJoao}\nPedro: ${AlturaPedro}`)

}