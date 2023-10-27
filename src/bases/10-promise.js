import { getHerueById } from "./08-09-importaciones-exportaciones";

// const promesa = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//        const herue = getHerueById(1);
//        resolve(herue);

//     //    console.log(herue);
//     //    reject("no se encontro el herue")
//     }, 1000);
// })

// promesa.then((herue)=>{
// console.log("resolvde de la promesa", herue);
// }).catch((err)=>{
//     console.warn(err);

// });

const getHeroueByIdAsync = (id) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
           const herue = getHerueById(id);
            if (herue) {
                resolve(herue);

            }else{
                reject("No se encontro")
            }
        //    console.log(herue);
        //    reject("no se encontro el herue")
        }, 1000);
    })
}

// console.log(getHeroueByIdAsync(2));
getHeroueByIdAsync(2).then(console.log).catch(console.warn);
