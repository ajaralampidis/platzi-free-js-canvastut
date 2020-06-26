"use strict";
//Selección del canvas
let d = document.getElementById("dibujo");
let lienzo = d.getContext("2d");

//Variables del canvas
let ancho = document.getElementById("ancho").value;
let alto = document.getElementById("alto").value;
let cantLineas = document.getElementById("cantLineas").value;
let colorRaya = document.getElementById("color").value;

//Función para trazar rayas
function raya(xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorRaya;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};

function reiniciarLienzo() 
{   
   lienzo.clearRect(0, 0, d.width, d.height);
};

function dibujarCanvas()
{
    for (let i = 0; i < cantLineas; i++)
    {
        let espaciadoVertical = alto / cantLineas;
        let espaciadoHorizontal = ancho / cantLineas;
        let xi = ancho;
        let yi = alto - (i*espaciadoVertical);
        let xf = ancho - ((i+1)*espaciadoHorizontal);
        let yf = 0;
        raya(xi, yi, xf, yf);
    };
};

//Ejecuta un dibujo al abrir la web
window.addEventListener("load", (event) =>
{
    dibujarCanvas();
    
});

document.getElementById("boton").addEventListener("click", (event) =>
{
    // evitar subbmit y limpiar el canvas
    reiniciarLienzo()
    
    // re-setear el ancho y alto del canvas (HTML element)
    d.height = document.getElementById("alto").value;
    d.width = document.getElementById("ancho").value;

    // re-setear variables para redibujar
    ancho = document.getElementById("ancho").value;
    alto = document.getElementById("alto").value;
    cantLineas = document.getElementById("cantLineas").value;
    colorRaya = document.getElementById("color").value;
    
    // Ejecutar el dibujo con las nuevas variables
    return dibujarCanvas()
    
});