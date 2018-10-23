var cifra=0;
var acumulado=0;
var p_operacion=true;
var sumar=false;
var restar=false;
var multiplicar=false;
var dividir=false;
document.getElementById("display").value=parseFloat(cifra);
function display(numero){
    document.getElementById("display").value=cifra+numero;
    cifra=document.getElementById("display").value;
}
function suma(){
    if(p_operacion==false){
    if(dividir){
        acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(restar){
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(multiplicar){
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
    sumar=true;
    restar=false;
    multiplicar=false;
    dividir=false;
}
function resta(){
    if(p_operacion==false){
    if(dividir){
        acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(multiplicar){
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
    restar=true;
    multiplicar=false;
    dividir=false;
    sumar=false;
}
function multiplicacion(){
    if(p_operacion==false){
    if(dividir){
        acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(restar){
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        acumulado=acumulado*parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra=0;
    multiplicar=true;
    sumar=false;
    restar=false;
    dividir=false;
}
function division(){
    if(p_operacion==false){
    if(multiplicar){
        acumulado=acumulado*parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(sumar){
        acumulado=acumulado+parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else if(restar){
        acumulado=acumulado-parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }else{
        acumulado=acumulado/parseFloat(cifra);
        document.getElementById("display").value=acumulado;
    }
    }else{
        acumulado=parseFloat(cifra);
        p_operacion=false;
    }
    cifra=0;
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
    cifra=0;
    }else{
        acumulado=parseFloat(document.getElementById("display").value);
        cifra=document.getElementById("display").value;
    }
}
function reseteo(){
    document.getElementById("display").value=0;
    acumulado=0;
    cifra=0;
    sumar=false;
    restar=false;
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