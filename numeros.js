var numero = document.getElementById("numero"),
    cuadrado = document.getElementById("cuadrado"),
    cubo = document.getElementById("cubo"),
    num = 1;

function bufor() {
    for (num = 1; num < 11; num++) {
        numero.innerHTML += "<td>" + num + "</td>";
    }
}   /*bucle for para realizar los numeros del 1 -10 */

function buwhile() {
   num = 1;     /*Este bucle nos permite realizar el cuadrado de los numeros comprendido del 1 al 10*/
    
    while (num >= 1 && num <= 10) {
        cuadrado.innerHTML += "<td>" + num * num + "</td>";
        num++;  /*Con esta funcion al multiplicar numero por numero te sale el cuadrado de los numeros del 1 - 10*/
    }
}

function budowhile() {
 num = 1;   
do {
        cubo.innerHTML += "<td>" + num * num * num + "</td>";
        num++;  /*Para obtener el cubo se multiplican los numeros 3 veces para obtener su cubo*/
    } while (num >= 1 && num <= 10);
}

function Tabla() {
   bufor();         /* Llamamos a la funcion por orden de tabla segun nos hayan pedido en el ejercicio de clase*/
    buwhile();
    budowhile();
}