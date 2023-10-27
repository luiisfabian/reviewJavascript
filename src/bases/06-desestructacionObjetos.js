const persona = {

    nombre: "tony",
    apellido: "Alvarez",
    edad: 34,
    altura: 22
}


// const { nombre, apellido, edad } = persona;


// console.log(nombre, apellido, edad);


// const retornaPersona = ({ clave, nombre, edad, altura = 23}) => {

//     // console.log(nombre, edad, altura);

//     return {
//         nombreClave: clave,
//         anios: edad,

//     };
// }

const userContext = ({ clave, nombre, edad, altura = 23}) => {

    // console.log(nombre, edad, altura);

    return {
        nombreClave: nombre,
        anios: edad,
        coordenadas:{
            lat: 232323,
            lng: 23231
        }

    };
}



// const avenger = userContext(persona)
const {nombreClave, anios, coordenadas: {lat, lng}} = userContext(persona)
console.log(nombreClave, anios );
console.log(lat, lng);