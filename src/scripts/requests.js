async function getPokemons() {
    const loading = document.querySelector('.loading')

    const listaDePokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(resposta => {
            return resposta.json()
        })
        .then( resposta =>{
            setTimeout(()=>{
                loading.remove()
            },1000)

            return resposta
        })
      .catch (error => console.log(error))

    return listaDePokemons
}

getPokemons()