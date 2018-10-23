var texto=document.getElementById("display");
var boton_reset=document.getElementById("boton_r");
var boton_reset1=document.getElementById("boton_r1");
var boton_dividir=document.getElementById("boton_:");
var boton_multiplicar=document.getElementById("boton_x");
var boton_restar=document.getElementById("boton_-");
var boton_sumar=document.getElementById("boton_+");
var boton_igual=document.getElementById("boton_=");
var boton_num0=document.getElementById("boton_0");
var boton_num1=document.getElementById("boton_1");
var boton_num2=document.getElementById("boton_2");
var boton_num3=document.getElementById("boton_3");
var boton_num4=document.getElementById("boton_4");
var boton_num5=document.getElementById("boton_5");
var boton_num6=document.getElementById("boton_6");
var boton_num7=document.getElementById("boton_7");
var boton_num8=document.getElementById("boton_8");
var boton_num9=document.getElementById("boton_9");
var boton_punto=document.getElementById("boton_.");
var cifra=0;
var acumulado=0;
var p_operacion=true;
var sumar=false;
var restar=false;
var multiplicar=false;
var dividir=false;
var igualdad=false;
var cero=0;
var punto=false;
texto.value=parseFloat(cifra);
function reseteo(){
    texto.value=0;
    acumulado=0;
    cifra=0;
    sumar=false;
    restar=false;
    multiplicar=false;
    dividir=false;
    p_operacion=true;
    igualdad=false;
    punto=false;
}
function display(numero){
    if(igualdad==true){
        reseteo();
    }
    if((numero!="." && punto==false) || (numero!="." && punto==true) || (numero=="." && punto==false)){
        texto.value=cifra+numero;
        cifra=texto.value;
        cero=0;
        if(numero=="."){
            punto=true;
        }
    }
}
function fprimeraoperacion(){
    acumulado=parseFloat(cifra);
    p_operacion=false;
}
function operaciones(){
    if(p_operacion==false){
        if(dividir){
            if(cifra==0 && cero==1)
                acumulado=acumulado/parseFloat(cero);
            else
                acumulado=acumulado/parseFloat(cifra);
            texto.value=acumulado;
        }else if(restar){
            acumulado=acumulado-parseFloat(cifra);
            texto.value.value=acumulado;
        }else if(multiplicar){
            if(cifra==0 && cero==1)
                acumulado=acumulado*parseFloat(cero);
            else
                acumulado=acumulado*parseFloat(cifra);
            texto.value=acumulado;
        }else if(sumar){
            acumulado=acumulado+parseFloat(cifra);
            texto.value=acumulado;
        }
        else{
            texto.value=acumulado;
        }
    }else{
        fprimeraoperacion();
    }
    texto.value=acumulado;
    cifra=0;
    cero=1;
    igualdad=false;
    punto=false;
}
function suma(){
    operaciones();
    sumar=true;
    restar=false;
    multiplicar=false;
    dividir=false;
}
function resta(){
    operaciones();
    restar=true;
    multiplicar=false;
    dividir=false;
    sumar=false;
}
function multiplicacion(){
    operaciones();
    multiplicar=true;
    sumar=false;
    restar=false;
    dividir=false;
}
function division(){
    operaciones();
    dividir=true;
    sumar=false;
    restar=false;
    multiplicar=false;
}
function resultado(){
    operaciones();
    igualdad=true;
}
function runo(){
    if(cifra.length==1){
        cifra=0;
    }else{
        if(cifra.substring(cifra.length-2, cifra.length-1)=="."){
            cifra=(cifra.substring(0, cifra.length-2));
            punto=false;
        }
        else{
            cifra=(cifra.substring(0, cifra.length-1));
        }
    }
    acumulado=parseFloat(cifra);
    texto.value=acumulado;
}
boton_num0.onclick=function(e){
    display(0);
}
boton_num1.onclick=function(e){
    display(1);
}
boton_num2.onclick=function(e){
    display(2);
}
boton_num3.onclick=function(e){
    display(3);
}
boton_num4.onclick=function(e){
    display(4);
}
boton_num5.onclick=function(e){
    display(5);
}
boton_num6.onclick=function(e){
    display(6);
}
boton_num7.onclick=function(e){
    display(7);
}
boton_num8.onclick=function(e){
    display(8);
}
boton_num9.onclick=function(e){
    display(9);
}
boton_punto.onclick=function(e){
    display('.');
}
boton_reset.onclick=function(e){
    reseteo();
}
boton_reset1.onclick=function(e){
    runo();
}
boton_sumar.onclick=function(e){
    suma();
}
boton_restar.onclick=function(e){
    resta();
}
boton_multiplicar.onclick=function(e){
    multiplicacion();
}
boton_dividir.onclick=function(e){
    division();
}
boton_igual.onclick=function(e){
    resultado();
}