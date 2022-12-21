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

addInput.addEventListener('keyup', (event) => {
    if(event.which === 13) {
      addLists();
    }
  }
)

//Función que activa el botón para abrir el calendario
// Funcion del boton que abre el calendario
function QuitarPortadaCalendario(){
    document.getElementById('portada-calendario').style.display = 'none';
    document.getElementById('apartado-instrucciones').style.display = 'none';
}

let randomNum = 0;
//Función randomizadora
function randomFunc(itemsLists) {
     randomNum = Math.floor(Math.random() * itemsLists.length) + 1 ;
     let random = itemsLists[randomNum];
     console.log(random);
    //  return random;
    ctnGanador.innerHTML=`<div class='resultado'> ${random}</div>`
 }

// let itemsLists = document.querySelectorAll(".list li");
// [...itemsLists].map(alumno => alumno.textContent);


let listaFotos = document.querySelector('#listaFotos');
for (let i = 1; i < 26; i++) {
  listaFotos.innerHTML += `<img src="./imagenes/calendarioDeAdviento/Dia${i}.png" alt="" id=${i}>`;
}


function tapadora(randomNum) {
console.log(randomNum);
let fotoParaTapar = document.getElementById(randomNum);
fotoParaTapar.style.backgroundColor = '#C5EDE4';
}


function onClickButton() {
randomFunc(itemsLists);
tapadora(randomNum); 
}

//Función para que suene música al sonar el boton elegir! 
let boton = document.querySelector(".reproductor")
let audioEtiqueta = document.querySelector("audio")

boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "ruta_a_tu_archivo")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })


