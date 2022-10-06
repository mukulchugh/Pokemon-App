const baseUrl = 'https://pokeapi.co/api/v2';
const query = {
  pokemon: 'pokemon'
}

export async function fetchPokemon(pokemon) {
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`)
}