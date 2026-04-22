// creamos un script para simular un producto de eBay y mostrar su información al usuario
// 1. Declaramos las variables simulando un producto de eBay
let nombreProducto = "Laptop Dell U\" Intel Core i5";
let precioProducto = 125.00;
let estadoProducto = "Bueno";
let cantidadProductos = 1000;

// 2. Mostramos el resultado 
alert(`El producto ${nombreProducto.toUpperCase()} tiene un precio de $${precioProducto} y su estado actual es: ${estadoProducto}.`);
undefined

// script para facebook para crear un usuario y mostrar su información como objeto 
const userFc = {
    name : "Mauro",
    lastName : "Lombardo",
    age : 29,
    address : {
        city :"Buenos Aires",
        telephone : "+54 45789631",
        streets:{
            principal :"Antezana 247",
            secondary : "Quinto Escalon Trap place"
        }
    }
}
const{name, lastName,age ,address:{streets}} = userFc
console.log(name,lastName,age,streets)

// como arreglo 
const users = [
    {
        name : "Billie Eilish",
        lastName : "Pirate Baird O'Connell",
        age : 24
    },
    {
        name : "Michael",
        lastName : "Jackson",
        age : 50
    }
]
const usersBDD = users.map((u)=>{
    return {
        name:u.name.toUpperCase(),
        lastName:u.lastName.toUpperCase()
    }
})
console.table(usersBDD)