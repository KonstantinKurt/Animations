;
"use strict";
var onloads = [];
var doc = document; // Кэшируем документ;
///////////////////////////
function getSpace() {
    // Расставляем парад планет;
    var sun = doc.getElementById('sun');
    var earth = doc.getElementById('earth');
    var moon = doc.getElementById('moon');
    sun.style.top = 30 + '%';
    sun.style.left = 45 + '%';
    var boxSun = sun.getBoundingClientRect();
    earth.style.top = (boxSun.top + 60) + 'px';
    earth.style.left = 35 + '%';
    moon.style.top = (boxSun.top + 90) + 'px';
    moon.style.left = 33 + '%';
    var boxEarth = earth.getBoundingClientRect(); // свойство получения координат элемента;
    var boxMoon = moon.getBoundingClientRect();
    var earthOrbit = (boxSun.left + 100) - (boxEarth.left + 40);
    var moonOrbit = (boxEarth.left + 40) - (boxMoon.left + 20);
    //Начальные углы и вспомогательные переменные;
    var alpha = 2*Math.PI;
    var beta = 2*Math.PI;
    var x =0;
    var y =0;
    setInterval(function() {
        //ДЛЯ СЕБЯ ЗАПОМНИТЬ!!! К координатам центра окружности добавлять/вычитать радиус, чтоб получить
        //свойства left/top/right/bottom;
        alpha += 0.1;
        beta +=0.4;
        earth.style.left = (boxSun.left + 60) + earthOrbit * Math.cos(alpha) + 'px';
        earth.style.top = (boxSun.top + 60) + earthOrbit * Math.sin(alpha) + 'px';
        x = +(earth.style.left.replace('px', "")) +40; //Координаты центра Земли(40 - это радиус Земли);
        y = +(earth.style.top.replace('px', ""))+40;
        moon.style.left = x -10 + (moonOrbit+15) * Math.cos(beta) + 'px';
        moon.style.top =  y -10 + (moonOrbit+15) * Math.sin(beta) + 'px';
    }, 100)
   
}









onloads.push(getSpace);
///////////////////////////
window.onload = function() {
    for (var i in onloads) {
        onloads[i]();
    }
}