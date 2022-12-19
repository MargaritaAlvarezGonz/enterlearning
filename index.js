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

let itemsLists = document.querySelectorAll(".list.li");

[...itemsLists].map(alumno => alumno.textContent);




