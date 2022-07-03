function choose_random(min,max){

    var respuestas = ['hora de comprar un reloj', 'es la hora es la hora', 'es la hora de jugar ilarilarile', 'las ocho', 'no se', 'mira el reloj'];
    var random = Math.floor(Math.random() * (max - min)) + min;
    return respuestas[random];
}