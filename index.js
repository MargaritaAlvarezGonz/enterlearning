/* document.querySelector('#boton-anadir').addEventListener('click', agregar);

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
*/
const divList = document.querySelector('.listHolder');

const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function addLists() {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = ''; //limpia el input
    ul.appendChild(li);
    return nombre;
     
}

addBtn.addEventListener('click', () => {
  addLists();
    
  
});



