#define bt1 13 //botao
#define bt2 12
#define bt3 11
#define bt4 10

#define cooler 7 //lampada
int tempo=500;

void setup(){
    pinMode(bt1, INPUT_PULLUP);
    pinMode(bt2, INPUT_PULLUP);
    pinMode(bt3, INPUT_PULLUP);
    pinMode(bt4, INPUT_PULLUP);

    pinMode(cooler,OUTPUT);
}

void loop(){

if(digitalRead(bt1) == 0){

    if(digitalRead(cooler)==0){

        delay(tempo);
        digitalWrite(cooler,1);
        while(digitalRead(bt1) == 0);

    }else if(digitalRead(cooler)==1){

        delay(tempo);
        digitalWrite(cooler,0);
        while(digitalRead(bt1) == 0);
    }
}

if(digitalRead(bt2) == 0){

    if(digitalRead(cooler)==0){

        delay(tempo);
        digitalWrite(cooler,1);
        while(digitalRead(bt2) == 0);

    }else if(digitalRead(cooler)==1){

        delay(tempo);
        digitalWrite(cooler,0);
        while(digitalRead(bt2) == 0);
    }
}

if(digitalRead(bt3) == 0){

    if(digitalRead(cooler)==0){

        delay(tempo);
        digitalWrite(cooler,1);
        while(digitalRead(bt3) == 0);

    }else if(digitalRead(cooler)==1){

        delay(tempo);
        digitalWrite(cooler,0);
        while(digitalRead(bt3) == 0);
    }
}

if(digitalRead(bt4) == 0){

    if(digitalRead(cooler)==0){

        delay(tempo);
        digitalWrite(cooler,1);
        while(digitalRead(bt4) == 0);

    }else if(digitalRead(cooler)==1){

        delay(tempo);
        digitalWrite(cooler,0);
        while(digitalRead(bt4) == 0);
    }
}

}