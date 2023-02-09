#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd_1(0);
#define b1 13

int tempo=10;
int segundo=50;

#define cooler 2
void setup(){

    pinMode(cooler,OUTPUT);
    lcd_1.begin(16,2);

    pinMode(13,INPUT_PULLUP);
    pinMode(b1, INPUT_PULLUP);
}

void loop(){

 if(digitalRead(13)==0){

    lcd_1.clear();  
    lcd_1.setCursor(6,1); 
    lcd_1.print(tempo);
    delay(segundo);
    tempo--;

    if(tempo==-1){

        tempo=00;
        digitalWrite(cooler,0);
    }

    if( tempo <= 60){

        digitalWrite(cooler,1);
    }
}
}
