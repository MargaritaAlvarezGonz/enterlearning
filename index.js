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



