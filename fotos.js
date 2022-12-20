let listaFotos = document.querySelector('#listaFotos');
for (let i = 1; i < 26; i++) {
  listaFotos.innerHTML += `<img src="./imagenes/calendarioDeAdviento/Dia${i}.png" alt="" id=${i}>`;
}

let randomNum = 0;

function seleccionImgAleatoria() {
let num = Math.floor(Math.random() * 25);
randomNum = num;
}


function tapadora(randomNum) {
console.log(randomNum);
let fotoParaTapar = document.getElementById(randomNum);
fotoParaTapar.style.backgroundColor = '#FF00FF'; 
}




 

