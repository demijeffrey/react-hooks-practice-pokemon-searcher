import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState('')
  // console.log(search)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setAllPokemon(data))
  }, [])

  function handleSubmit(newPokemon) {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(data => setAllPokemon([...allPokemon, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection allPokemon={allPokemon} search={search} />
    </Container>
  );
}

export default PokemonPage;
