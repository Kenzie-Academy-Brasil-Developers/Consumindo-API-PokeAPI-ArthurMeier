const input = document.querySelector('.pesquisa')
const lista = document.querySelector('ul')
const loading = document.querySelector('.loading')
let searchTimoutID

function showLoading(){
    loading.style.display = "inherit"
}

function hideLoading(){
    loading.style.display = "none"
}

function clearPokemonList() {
    while (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}

function populatePokemonList(listaDePokemons) {
    listaDePokemons.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1)
        
        lista.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <p>${pokemon.name}</p>
            </li>
        `)
    })
}

async function renderizarPokemons(filter) {

    clearPokemonList()
    showLoading()

    setTimeout(async ()=>{
        const listaDePokemons = await getPokemons(filter)
        hideLoading()
        populatePokemonList(listaDePokemons)
    },1000)

}

renderizarPokemons()

input.onkeyup = function (e) {
    const filter = this.value.toLowerCase()
    if(searchTimoutID){
        clearTimeout(searchTimoutID)
    }
    searchTimoutID = setTimeout(()=>{
        renderizarPokemons(filter)

    },500)
    
}
