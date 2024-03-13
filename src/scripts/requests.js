async function getPokemons(filter) {
  const listaDePokemons = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  )
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      if (!filter) {
        return resposta.results;
      }
      return resposta.results.filter((pokemon) => {
        return pokemon.name.includes(filter);
      });
    })
    .catch((error) => console.log(error));
  return listaDePokemons;
}

async function getPokemonStat(fil) {
  const pokemonStat = await fetch(`https://pokeapi.co/api/v2/pokemon/${fil}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => console.log(error));
  return pokemonStat;
}
