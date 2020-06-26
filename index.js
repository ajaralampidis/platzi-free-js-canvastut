"use strict";
//Selección del canvas
let d = document.getElementById("dibujo");
let lienzo = d.getContext("2d");

//Función para trazar rayas
function raya(xi, yi, xf, yf) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorRaya;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};

// Alto y Ancho del canvas (admite modificar el HTML)
let altoLienzo = lienzo.canvas.clientHeight;
let anchoLienzo = lienzo.canvas.clientWidth;

// Modificar Cantidad de rayas y color
let cantidadRayas = 25;
let colorRaya = "green";

// Calculo "automático" del espacio entre rayas
let espaciadoVertical = altoLienzo / cantidadRayas;
let espaciadoHorizontal = anchoLienzo / cantidadRayas;


for (let i = 0; i < cantidadRayas; i++) {
    let xi = anchoLienzo;
    let yi = altoLienzo - (i*espaciadoVertical);
    let xf = anchoLienzo - ((i+1)*espaciadoHorizontal);
    let yf = 0;
    raya(xi, yi, xf, yf);
};
