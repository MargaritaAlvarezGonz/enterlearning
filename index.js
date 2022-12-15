document.querySelector('#boton-anadir').addEventListener('click', agregar);

let nombres = [];

function agregar(){
    let nombres=document.getElementById('#nombresAlumnos').value;

    nombres.push(nombre);
    console.log(nombres);

    mostrar();

    document.querySelector('nombres').value = "";
}

function mostrar (){
    let lista =document.querySelector('#texto-instructions');
    lista.innerHTML = '';
for (let elementoActual of nombres) {
    lista.innerHTML += "<li>" + elementoActual + "</li>"
}
}