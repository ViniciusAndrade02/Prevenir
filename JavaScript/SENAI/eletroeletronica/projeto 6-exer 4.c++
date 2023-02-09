#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd_1(0);
#define b1 2

int aa=13 , bb=12, cc=11, dd=10, ee=9, ff=8, gg=7;
int tempo=1000;

void setup(){

    pinMode(2,INPUT_PULLUP);
    pinMode(b1, INPUT_PULLUP);



    pinMode(aa,OUTPUT);
    pinMode(bb,OUTPUT);
    pinMode(cc,OUTPUT);
    pinMode(dd,OUTPUT);
    pinMode(ee,OUTPUT);
    pinMode(ff,OUTPUT);
    pinMode(gg,OUTPUT);

}

void loop(){


if(digitalRead(2)==0){

    sete();

    if(digitalRead(2)==0){
        um();
    }


}
}


void zero(){
      //zero
digitalWrite(aa,1);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,1);
digitalWrite(ee,1);
digitalWrite(ff,1);
digitalWrite(gg,0);
}

void um(){

  //um
digitalWrite(aa,0);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,0);
digitalWrite(ee,0);
digitalWrite(ff,0);
digitalWrite(gg,0);
}

void dois(){

digitalWrite(aa,1);
digitalWrite(bb,1);
digitalWrite(cc,0);
digitalWrite(dd,1);
digitalWrite(ee,1);
digitalWrite(ff,0);
digitalWrite(gg,1);
}

void tres(){

digitalWrite(aa,1);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,1);
digitalWrite(ee,0);
digitalWrite(ff,0);
digitalWrite(gg,1);
}

void quatro(){

digitalWrite(aa,0);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,0);
digitalWrite(ee,0);
digitalWrite(ff,1);
digitalWrite(gg,1);
}

void cinco(){

digitalWrite(aa,1);
digitalWrite(bb,0);
digitalWrite(cc,1);
digitalWrite(dd,1);
digitalWrite(ee,0);
digitalWrite(ff,1);
digitalWrite(gg,1);

}

void seis(){

digitalWrite(aa,1);
digitalWrite(bb,0);
digitalWrite(cc,1);
digitalWrite(dd,1);
digitalWrite(ee,1);
digitalWrite(ff,1);
digitalWrite(gg,1);

}

void sete(){

digitalWrite(aa,1);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,0);
digitalWrite(ee,0);
digitalWrite(ff,0);
digitalWrite(gg,0);

}

void oito(){

digitalWrite(aa,1);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,1);
digitalWrite(ee,1);
digitalWrite(ff,1);
digitalWrite(gg,1);

}

void nove(){

digitalWrite(aa,1);
digitalWrite(bb,1);
digitalWrite(cc,1);
digitalWrite(dd,0);
digitalWrite(ee,0);
digitalWrite(ff,1);
digitalWrite(gg,1);

}