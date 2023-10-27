const personas = ['goku', 'vegueta', 'trunks'];

const [, , p3] = personas;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

// tarea
//1. el primer valor del arr se llamara  nombre
//2. se llamara setNombre
const usesState = (valor) => {
    return [ valor, () => { console.log('Hola mundo ');}]
}

const [nombre, setNombre] =  usesState('Goku')
console.log(nombre);
setNombre();