// const api_key = "wp4XxDHy2W8a2rEQuE1w3M8gEzmdewxR";

// const httpCall = fetch('https://api.giphy.com/v1/gifs/random?api_key=' + api_key)

// httpCall.then((result) => result.json()).then(({data}) => {
//     const { url } = data.images.original

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img)
// }).catch((err) => {
//     console.warn(err);
// });


const getImagen = async () => {
    try {
        const api_key = "wp4XxDHy2W8a2rEQuE1w3M8gEzmdewxR";
        const resp = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + api_key)
        const { data } = await resp.json();
        const { url } = data.images.original

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    } catch (error) {
        console.error(error);
    }

}


getImagen()