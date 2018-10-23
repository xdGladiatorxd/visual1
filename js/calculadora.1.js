var cifra=0;
var acumulado=0;
var p_operacion=true;
var sumar=false;
var restar=false;
var multiplicar=false;
var dividir=false;
var cero=0;
document.getElementById("display").value=parseFloat(cifra);
function display(numero){
    document.getElementById("display").value=cifra+numero;
    cifra=document.getElementById("display").value;
    cero=0;
}
function suma(){
    if(p_operacion==false){
    if(dividir){
        if(cifra==0 && cero==1)
            acumulado=acumulado/parseFloat(cero);
        else
            acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(restar){
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(multiplicar){
        if(cifra==0 && cero==1)
            acumulado=acumulado*parseFloat(cero);
        else
            acumulado=acumulado*parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra=0;
    cero=1;
    sumar=true;
    restar=false;
    multiplicar=false;
    dividir=false;
}
function resta(){
    if(p_operacion==false){
    if(dividir){
        if(cifra==0 && cero==1)
            acumulado=acumulado/parseFloat(cero);
        else
            acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(multiplicar){
        if(cifra==0 && cero==1)
            acumulado=acumulado*parseFloat(cero);
        else
            acumulado=acumulado*parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra=0;
    cero=1;
    restar=true;
    multiplicar=false;
    dividir=false;
    sumar=false;
}
function multiplicacion(){
    if(p_operacion==false){
    if(dividir){
        if(cifra==0 && cero==1)
            acumulado=acumulado/parseFloat(cero);
        else
            acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(restar){
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        if(cifra==0 && cero==1)
            acumulado=acumulado*parseFloat(cero);
        else
            acumulado=acumulado*parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra=0;
    cero=1;
    multiplicar=true;
    sumar=false;
    restar=false;
    dividir=false;
}
function division(){
    if(p_operacion==false){
    if(multiplicar){
        if(cifra==0 && cero==1)
            acumulado=acumulado*parseFloat(cero);
        else
            acumulado=acumulado*parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(restar){
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        if(cifra==0 && cero==1)
            acumulado=acumulado/parseFloat(cero);
        else
            acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra=0;
    cero=1;
    dividir=true;
    sumar=false;
    restar=false;
    multiplicar=false;
}
function resultado(){
    if(p_operacion==false){
    if(sumar){
        document.getElementById("display").value=acumulado+parseFloat(cifra);
    }else if(restar){
        document.getElementById("display").value=acumulado-parseFloat(cifra);
    }else if(multiplicar){
        document.getElementById("display").value=acumulado*parseFloat(cifra);
    }else{
        document.getElementById("display").value=acumulado/parseFloat(cifra);
    }
    acumulado=parseFloat(document.getElementById("display").value);
    }else{
        document.getElementById("display").value=cifra+numero;
        acumulado=parseFloat(document.getElementById("display").value);
    }
    cifra=0;
    cero=0;
}
function reseteo(){
    document.getElementById("display").value=0;
    acumulado=0;
    cifra=0;
    sumar=false;
    restar=false;
    multiplicar=false;
    dividir=false;
    p_operacion=true;
}
function runo(){
    if(cifra.length==1){
        cifra=0;
    }else{
        cifra=(cifra.substring(0, cifra.length-1));
    }
    acumulado=parseFloat(cifra);
    document.getElementById("display").value=acumulado;
}