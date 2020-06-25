"use strict";
let d = document.getElementById("dibujo");
let lienzo = d.getContext("2d");


let colorRaya = "red";


for (let i = 0; i < 60; i++) {
    let xi = 300;
    let yi = 300-(i*10);
    let xf = 290 - (i*10);
    let yf = 0;
    raya(xi, yi, xf, yf);
};

function raya(xi, yi, xf, yf) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorRaya;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};