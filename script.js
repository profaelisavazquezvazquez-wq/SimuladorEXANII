const preguntas=[

{
p:'La mitad de un número x es:',
o:['2x','x/2','x+2','x-2'],
r:1
},

{
p:'La quinta parte de un número es:',
o:['5x','x/5','x+5','x-5'],
r:1
},

{
p:'¿Cuánto es 45 + 38?',
o:['73','83','93','63'],
r:1
},

{
p:'¿Cuánto es 12 × 8?',
o:['84','96','104','88'],
r:1
},

{
p:'Resuelve: 2x + 6 = 16',
o:['4','5','6','7'],
r:1
},

{
p:'El doble de un número aumentado en 5:',
o:['2x+5','x+5','2+x','x²'],
r:0
},

{
p:'La edad de Ana (a) y Pedro (p) juntas se representa como:',
o:['a+p','a-p','ap','a/p'],
r:0
},

{
p:'La décima parte de un número:',
o:['10x','x/10','x+10','10+x'],
r:1
},

{
p:'Resuelve: x - 7 = 12',
o:['17','18','19','20'],
r:2
},

{
p:'¿Cuánto es 15²?',
o:['125','200','225','250'],
r:2
},

{
p:'¿Cuál palabra está correctamente escrita?',
o:['Aser','Hacer','Haser','Asér'],
r:1
},

{
p:'¿Cuál es un sustantivo?',
o:['Correr','Bonito','Mesa','Rápidamente'],
r:2
},

{
p:'¿Cuál es el sinónimo de feliz?',
o:['Triste','Contento','Molesto','Enojado'],
r:1
},

{
p:'¿Cuál es el antónimo de alto?',
o:['Grande','Pequeño','Bajo','Ancho'],
r:2
},

{
p:'¿Qué signo lleva una pregunta?',
o:['¡ !','( )','¿ ?','[ ]'],
r:2
},

{
p:'¿Cuál es el planeta rojo?',
o:['Venus','Marte','Saturno','Mercurio'],
r:1
},

{
p:'¿Cuál es el satélite natural de la Tierra?',
o:['Sol','Luna','Marte','Venus'],
r:1
},

{
p:'¿Qué gas respiramos principalmente?',
o:['Oxígeno','Hidrógeno','Helio','Neón'],
r:0
},

{
p:'¿Cuántos estados tiene México?',
o:['30','31','32','33'],
r:2
},

{
p:'Capital del estado de Veracruz:',
o:['Veracruz','Poza Rica','Orizaba','Xalapa'],
r:3
}

];

let i=0;
let respuestas=[];

function iniciar(){

let nombre=document.getElementById("nombre").value;

if(nombre===""){
alert("Escribe tu nombre");
return;
}

document.getElementById("inicio").style.display="none";
document.getElementById("quiz").style.display="block";

mostrarPregunta();
}

function mostrarPregunta(){
    
document.getElementById("progreso").innerHTML=
"Pregunta "+(i+1)+" de "+preguntas.length;

document.getElementById("pregunta").innerHTML=
preguntas[i].p;

let html="";

preguntas[i].o.forEach((opcion,index)=>{

html+=`
<label>
<input type="radio"
name="respuesta"
value="${index}"
${respuestas[i]==index?"checked":""}>
${opcion}
</label>
<br><br>
`;
document.getElementById("avance").style.width=
((i+1)/preguntas.length*100)+"%";

});

document.getElementById("opciones").innerHTML=html;
}

function guardarRespuesta(){

let seleccion=
document.querySelector('input[name="respuesta"]:checked');

if(seleccion){
respuestas[i]=parseInt(seleccion.value);
}
}

function siguiente(){

guardarRespuesta();

if(i<preguntas.length-1){

i++;
mostrarPregunta();

}else{

finalizar();

}
}

function anterior(){

guardarRespuesta();

if(i>0){

i--;
mostrarPregunta();

}
}

function finalizar(){

guardarRespuesta();

let aciertos = 0;

preguntas.forEach((pregunta,index)=>{

    if(respuestas[index]===pregunta.r){
        aciertos++;
    }

});

let porcentaje =
((aciertos/preguntas.length)*100).toFixed(0);

let nivel="";

if(porcentaje>=90){
    nivel="EXCELENTE";
}
else if(porcentaje>=80){
    nivel="MUY BUENO";
}
else if(porcentaje>=70){
    nivel="BUENO";
}
else if(porcentaje>=60){
    nivel="REGULAR";
}
else{
    nivel="REQUIERE REFORZAMIENTO";
}

document.getElementById("quiz").style.display="none";

document.getElementById("resultado").style.display="block";

document.getElementById("resultado").innerHTML = `

<img src="logo.png" class="logo">

<h1>Resultado Final</h1>

<h2>${document.getElementById("nombre").value}</h2>

<h3>${aciertos}/${preguntas.length}</h3>

<h2>${porcentaje}%</h2>

<div class="nivel">
    ${nivel}
</div>

`;
}
let tiempo=1200;

setInterval(()=>{

if(document.getElementById("quiz").style.display==="block"){

tiempo--;

let minutos=Math.floor(tiempo/60);
let segundos=tiempo%60;

document.getElementById("timer").innerHTML=
minutos+":"+
(segundos<10?"0":"")+segundos;

if(tiempo<=0){

finalizar();

}

}

},1000);