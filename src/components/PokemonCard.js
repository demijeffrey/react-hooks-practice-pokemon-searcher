import React, { useState } from "react";
import { Card } from "semantic-ui-react";
// import { useState } from "react";

function PokemonCard({ pokemon }) {

  const [sprites, setSprites] = useState(false)

  function handleClick() {
    setSprites(!sprites)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!" src={sprites ? pokemon.sprites.back : pokemon.sprites.front} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );

  // return (
  //   <Card>
  //     <div>
  //       <div className="image">
  //         <img alt="oh no!" />
  //       </div>
  //       <div className="content">
  //         <div className="header">POKEMON NAME HERE</div>
  //       </div>
  //       <div className="extra content">
  //         <span>
  //           <i className="icon heartbeat red" />
  //           POKEMON HP HERE hp
  //         </span>
  //       </div>
  //     </div>
  //   </Card>
  // );
}

export default PokemonCard;
