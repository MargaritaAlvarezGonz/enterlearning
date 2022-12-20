let listaFotos = document.querySelector('#listaFotos');
for (let i = 1; i < 26; i++) {
  listaFotos.innerHTML += `<img src="./imagenes/calendarioDeAdviento/Dia${i}.png" alt="" class='dia${i}'>`;
}

function seleccionImgAleatoria() {
let randomNum = Math.floor(Math.random()*26)
return (randomNum)
}

function tapadora(i) {
  let fotoParaTapar = document.querySelector(`.dia${i}`);
  fotoParaTapar.style.backgroundColor = '#FF00FF';
}

function 