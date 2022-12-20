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

function randomFunc(itemsLists) {
     let random = itemsLists[Math.floor(Math.random() * itemsLists.length)];
     return random;
 }

// let itemsLists = document.querySelectorAll(".list li");
// [...itemsLists].map(alumno => alumno.textContent);
