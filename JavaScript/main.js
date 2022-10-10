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

/*function calcularDescuentoJuego(precio, porcentaje){
    let valorDescuento = precio * porcentaje / 100;
    let precioFinal = precio - valorDescuento;
    return precioFinal;
}*/


//Objeto constructor y ej. de metodos
class Juego {
    constructor(nombre, genero, consola, precio) {
        this.nombre = nombre.toLowerCase(); 
        this.genero = genero.toLowerCase();
        this.consola = consola.toLowerCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    agregarIva(){
        this.precio = this.precio * 1,21;
    }
    vender(){
        this.vendido = true;
    }
}

const juegoUsuario = ()=>{
    let nombreJuego = prompt("Como se llama el juego?");
    let generoJuego = prompt("Cual es el genero?");
    let consolaJuego = prompt("Para que consola es?");
    let precioJuego = parseFloat(prompt("Cual es el precio?"));
    
    const juego = new Juego(nombreJuego, generoJuego, consolaJuego, precioJuego,)
    console.log(juego);
    return juego;
}

//Array
const juegosDisponibles = ["elden ring", "demon souls", "resident evil village", "super mario", "gran turismo 7", "halo"];

const carritoCompras = [];
let productoUsuario = prompt("Que juego queres agregar al carro?").toLocaleLowerCase();

const agregarProducto = ()=> {
    let stockSi = juegosDisponibles.includes(productoUsuario);
    if(stockSi){
        carritoCompras.push(productoUsuario)
    }else {
    alert("Sin stock disponible");
    } 
    }
agregarProducto()
console.log(carritoCompras);


//Funciones de orden superior

const stockProductos = [
    {nombre:"elden ring", precio:15000},
    {nombre:"demon souls", precio:16000},
    {nombre:"resident evil village", precio:12000},
    {nombre:"super mario", precio:14900},
    {nombre:"gran turismo 7", precio:11000},
    {nombre:"halo", precio:13000}
];

stockProductos.forEach(producto=>{
    console.log(`El juego es ${producto.nombre} tiene stock disponible, y su precio es de $${producto.precio}`)
})

let juegoAbuscar = prompt("Que producto estas buscando?").toLocaleLowerCase();
let consultarStock = stockProductos.find(elemento=> elemento.nombre == juegoAbuscar);
console.log(consultarStock);

let filtrarPorPrecio = stockProductos.filter(elemento => elemento.precio > 12000);
console.log(filtrarPorPrecio);