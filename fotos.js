let listaFotos = document.querySelector('#listaFotos');
for (let i = 1; i < 26; i++) {
  listaFotos.innerHTML += `<img src="./imagenes/calendarioDeAdviento/Dia${i}.png" alt="" class='estilo'>`;
}

function seleccionImgAleatoria(listaFotos) {

}
console.log(seleccionImgAleatoria(listaFotos));