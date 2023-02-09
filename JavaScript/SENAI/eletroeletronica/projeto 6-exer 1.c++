#define bt1 13
#define bt2 12
#define bt3 11
#define bt4 10

int red=7;
int green=6;
int yel=5;
int blue=4;

void setup(){
    pinMode(bt1, INPUT_PULLUP);
    pinMode(bt2, INPUT_PULLUP);
    pinMode(bt3, INPUT_PULLUP);
    pinMode(bt4, INPUT_PULLUP);
    Serial.begin(9600);

    pinMode(red,OUTPUT);
    pinMode(green,OUTPUT);
    pinMode(yel,OUTPUT);
    pinMode(blue,OUTPUT);
}

void loop(){
    if(digitalRead(bt1) == 0){
        Serial.print("\nParabéns!\nGanhou um pirulito");
        digitalWrite(7,HIGH);
        while(digitalRead(bt1) == 0);
        digitalWrite(7,LOW);
    }

    if(digitalRead(bt2) == 0){
        Serial.print("\nParabéns!\nGanhou uma cerveja");
        digitalWrite(6,HIGH);
        while(digitalRead(bt2) == 0);
        digitalWrite(6,LOW);

    }
    if(digitalRead(bt3) == 0){
        Serial.print("\nParabéns!\nGanhou uma bicicleta");
        digitalWrite(5,HIGH);
        while(digitalRead(bt3) == 0);
        digitalWrite(5,LOW);
    }
    if(digitalRead(bt4) == 0){
        Serial.print("\nParabéns!\nGanhou um Uno 0km");
        digitalWrite(4,HIGH);
        while(digitalRead(bt4) == 0);
        digitalWrite(4,LOW);
    }
}