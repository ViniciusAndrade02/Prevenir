#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd_1(0);
#define b1 13

int pisca=12;
int tempo=100;

void setup(){

    pinMode(13,INPUT_PULLUP);
    pinMode(b1, INPUT_PULLUP);

    pinMode(12,OUTPUT);
}

void loop(){

if(digitalRead(13)==0){

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);
        digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);
        digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

    digitalWrite(12,HIGH);
    delay(tempo);
    digitalWrite(12,LOW);
    delay(tempo);

}
}
