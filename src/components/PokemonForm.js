import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {

  const [newPokemonName, setNewPokemonName] = useState('')
  const [newPokemonHP, setNewPokemonHP] = useState('')
  const [newPokemonFront, setNewPokemonFront] = useState('')
  const [newPokemonBack, setNewPokemonBack] = useState('')

  function onSubmit() {
    const newPokemon = {
      name: newPokemonName,
      hp: newPokemonHP,
      sprites: {
        front: newPokemonFront,
        back: newPokemonBack
      }
    }
    handleSubmit(newPokemon)
    setNewPokemonName('')
    setNewPokemonHP('')
    setNewPokemonFront('')
    setNewPokemonBack('')
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          // console.log("submitting form...");
          onSubmit()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemonName} onChange={(e) => setNewPokemonName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemonHP} onChange={(e) => setNewPokemonHP(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemonFront}
            onChange={(e) => setNewPokemonFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemonBack}
            onChange={(e) => setNewPokemonBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );


  // return (
  //   <div>
  //     <h3>Add a Pokemon!</h3>
  //     <Form
  //       onSubmit={() => {
  //         console.log("submitting form...");
  //       }}
  //     >
  //       <Form.Group widths="equal">
  //         <Form.Input fluid label="Name" placeholder="Name" name="name" />
  //         <Form.Input fluid label="hp" placeholder="hp" name="hp" />
  //         <Form.Input
  //           fluid
  //           label="Front Image URL"
  //           placeholder="url"
  //           name="frontUrl"
  //         />
  //         <Form.Input
  //           fluid
  //           label="Back Image URL"
  //           placeholder="url"
  //           name="backUrl"
  //         />
  //       </Form.Group>
  //       <Form.Button>Submit</Form.Button>
  //     </Form>
  //   </div>
  // );
}

export default PokemonForm;
