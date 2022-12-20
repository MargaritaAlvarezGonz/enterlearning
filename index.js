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

// let itemsLists = document.querySelectorAll(".list li");

// [...itemsLists].map(alumno => alumno.textContent);


// function randomFunc([itemsLists]) { 
//     for (let i = 0; i < 2; i++) { 
//         const random = [itemsLists][Math.floor(Math.random() * [itemsLists].length)]; 
//         return random 

//     } 

// } 

 function randomFunc(itemsLists) {
     let random = itemsLists[Math.floor(Math.random()) * itemsLists.length];
     return random;
 }


//console.log(randomFunc(itemsLists));

// function randomFunc() {
//     return itemsLists[Math.floor(Math.random()) * (itemsLists.length)];
// }