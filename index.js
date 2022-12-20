const divList = document.querySelector('.listHolder');
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

let itemsLists = [];

function addLists() {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    itemsLists.push(addInput.value);
    addInput.value = ''; //limpia el input
    ul.appendChild(li);   
}

addBtn.addEventListener('click', () => {
    addLists();

});

//Función que activa el botón para abrir el calendario
// Funcion del boton que abre el calendario
function QuitarPortadaCalendario(){
    document.getElementById('portada-calendario').style.display = 'none';
    document.getElementById('apartado-instrucciones').style.display = 'none';
}

//Función randomizadora
function randomFunc(itemsLists) {
     let random = itemsLists[Math.floor(Math.random() * itemsLists.length)];
     return random;
 }

// let itemsLists = document.querySelectorAll(".list li");
// [...itemsLists].map(alumno => alumno.textContent);

