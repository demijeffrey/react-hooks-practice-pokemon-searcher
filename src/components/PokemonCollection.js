import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ allPokemon, search }) {

  let pokemonToDisplay = allPokemon
  if(search !== '') {
    pokemonToDisplay = allPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })
  }
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokemonToDisplay.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
