const input = document.querySelector('.pesquisa')

async function renderizarPokemons() {
    const lista = document.querySelector('ul')

    const listaDePokemons = await getPokemons()
    setTimeout(() => {
        listaDePokemons.results.forEach(pokemon => {
            const numeroNaPokedex = pokemon.url.slice(34, -1)

            lista.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <p>${pokemon.name}</p>
            </li>
        `)
        })
    }, 1000);
}

renderizarPokemons()

input.onkeyup = function(e){
    t=this.value
    console.log(t)
}