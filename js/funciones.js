var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var id_mensaje1=document.getElementById("id_mensaje1");
var id_mensaje2=document.getElementById("id_mensaje2");
var id_mensaje3=document.getElementById("id_mensaje3");
var article1=document.getElementsByTagName("article")[0];
img1.onclick=function(e){
    id_mensaje1.value="Java";
}
img2.onclick=function(e){
    id_mensaje2.value="JS";
}
img3.onclick=function(e){
    id_mensaje3.value="PHP";
}
img1.ondblclick=function(e){
    id_mensaje1.style.color='blue';
}
img2.ondblclick=function(e){
    id_mensaje2.style.color='red';
}
img3.ondblclick=function(e){
    id_mensaje3.style.color='white';
}
img1.onmouseover=function(e){
    article1.style.backgroundColor='orange';
}
img2.onmouseover=function(e){
    article1.style.backgroundColor='yellow';
}
img3.onmouseover=function(e){
    article1.style.backgroundColor='blue';
}
img1.onmouseout=function(e){
    article1.style.backgroundColor='#FFAAAA';
}
img2.onmouseout=function(e){
    article1.style.backgroundColor='#FFAAAA';
}
img3.onmouseout=function(e){
    article1.style.backgroundColor='#FFAAAA';
}
img1.onmousedown=function(e){
    id_mensaje1.style.backgroundColor='orange';
}
img2.onmousedown=function(e){
    id_mensaje2.style.backgroundColor='yellow';
}
img3.onmousedown=function(e){
    id_mensaje3.style.backgroundColor='blue';
}