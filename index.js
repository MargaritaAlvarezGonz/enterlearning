const divList = document.querySelector('.listHolder');

const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function addLists() {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = ''; //limpia el input
    ul.appendChild(li);
}

addBtn.addEventListener('click', () => {
  addLists();  
});

let itemsLists = document.querySelectorAll(".list.li");

[...itemsLists].map(alumno => alumno.textContent);

//Función que activa el botón para abrir el calendario
// Funcion del boton que abre el calendario
function QuitarPortadaCalendario(){
    document.getElementById('portada-calendario').style.display = 'none';
}

