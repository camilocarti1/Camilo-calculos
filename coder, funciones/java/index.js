const suma = (a,b) => a + b

const resta = (a,b) => a-b

const iva = x => x * 0.24

let precioProducto = 400

let descuento = 50

let nuevoPrecio = resta (suma(precioProducto, iva(precioProducto)), descuento)
console.log (nuevoPrecio)


var nombre = prompt ("Ingrese nombre de usuario:");


alert("Usted a iniciado sesion con el usuario: " + nombre);

let primerNumero = prompt ("ingrese numero")
let operacion = prompt ("ingrese la operacion")
let segundoNumero = prompt ("ingrese el siguiente numero")



function calculadora (primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case "+":
            return parseFloat(primerNumero) + parseFloat(segundoNumero);
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
} 

alert (calculadora ( primerNumero, segundoNumero, operacion))
