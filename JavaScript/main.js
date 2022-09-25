// Algoritmo con un condicional:

/*let opcionJuego = prompt("Que clase de juego estas buscando?")

if (opcionJuego.toLowerCase() == "pelea"){
    alert("El juego que buscas es Mortal Kombat, y su pecio es $10.500");
}else if (opcionJuego.toLowerCase() == "deportes"){
    alert("El juego que buscas es Fifa 2023, y su pecio es $13.500");
}else if (opcionJuego.toLowerCase() == "accion"){
    alert("El juego que buscas es Call of Dutty, y su pecio es $12.500")
}else {
    alert("Te recomendamos buscar en la seccion Productos destacados");
}

// Algoritmo utilizando un ciclo:
let consultaUsuario = prompt("Que titulo queres consultarnos? Ingresa 'exit' para salir");

while(consultaUsuario != "exit") {
 alert (`El juego ${consultaUsuario} lo tenemos en stock`);
 consultaUsuario = prompt("Que titulo buscas? Ingresa 'exit' para salir");
}*/

//Funcion:
function calcularDescuentoJuego(precio, porcentaje){
    let valorDescuento = precio * porcentaje / 100;
    let precioFinal = precio - valorDescuento;
    return precioFinal;
}
function juegoUsuario(){
    let nombreJuego = prompt("Como se llama el juego?");
    let consolaJuego = prompt("Para que consola es?");
    let precioJuego = parseFloat(prompt("Cual es el precio?"));
    let descuentoJuego = parseInt(prompt("Cuanto descuento tiene?"));
    
    let precioFinal = calcularDescuentoJuego(precioJuego, descuentoJuego);
    let juego =  console.log(`El juego que elegiste es ${nombreJuego} para la consola ${consolaJuego} y su precio final es ${precioFinal}`);
    return juego
}

juegoUsuario()