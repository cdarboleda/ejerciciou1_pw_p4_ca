let intentos = 0;
let puntaje = 0;
let respuesta = "";
let imagen = "";
function opcion(id) {
    intentos += 1;

    if (id === 'btnExcadrill') {
        if (intentos == 1) puntaje = 5;
        else if (intentos == 2) puntaje = 3;
        else puntaje = 1;

        respuesta = "Felicitaciones, has seleccionado la opción correcta - Reiniciar el juego!!";
        imagen = "./img/pcolor.jpg";
    } else if (id == '') {
        reset()
    }
    else {
        if (intentos == 3) {
            reset()
        } else {
            respuesta = "Pokémon incorrecto, intentalo nuevamente";
            imagen = "./img/pcolor.jpg";
        }
    }

    pintar(puntaje, intentos, respuesta, imagen);

}

function reset() {
    intentos = 0;
    puntaje = 0;
    imagen = "./img/pnegro.jpg"
    respuesta = "";
}

function pintar(puntaje, intentos, respuesta, imagen){
    document.getElementById('txtInicialPuntaje').innerHTML = "Puntaje: " + puntaje;
    document.getElementById('txtInicialIntentos').innerHTML = "Intentos: " + intentos;
    document.getElementById('lblRespuesta').innerHTML = respuesta;
    document.getElementById('imgPokemon').src = imagen;
}