import  heroes  from "../data/heroes";

// console.log(heroes);

// const getHerueById = (id) => {
//     return heroes.find((heroe) =>{
//         if (heroe.id == id) {
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

export const getHerueById = (id) => {
    return heroes.find((heroe) =>heroe.id === id)

}

// console.log(getHerueById(5));

export const getHerouesBNyOwner = (owner) => {
    return heroes.filter((heroe) =>heroe.owner === owner)

}

// console.log(getHerouesBNyOwner("Marvel"));