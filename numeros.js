var numero = document.getElementById("numero"),
    cuadrado = document.getElementById("cuadrado"),
    cubo = document.getElementById("cubo"),
    num = 1;

function bufor() {
    for (num = 1; num < 11; num++) {
        numero.innerHTML += "<td>" + num + "</td>";
    }
}

function buwhile() {
   num = 1;
    
    while (num >= 1 && num <= 10) {
        cuadrado.innerHTML += "<td>" + num * num + "</td>";
        num++;
    }
}

function budowhile() {
 num = 1;
do {
        cubo.innerHTML += "<td>" + num * num * num + "</td>";
        num++;
    } while (num >= 1 && num <= 10);
}

function Tabla() {
   bufor();
    buwhile();
    budowhile();
}