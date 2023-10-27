console.log("hola smundo");

// TAREA
// 1. TRANSFORMAR A FUNCION DE FLECHA
// 2. TIENE QUE RETORNAR UN OBJETO IMPLICITO
// 3. PRUEBA

const usuarioActivo =  (nombre) => ({
        uid: 'asv2323',
        userName: nombre
    }
);
const usuarioACtivo = getUsuarioACtivo('Fernando');

console.log(usuarioACtivo);