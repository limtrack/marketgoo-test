// React
import React from "react";
// Components
import PlayersList from './elements/PlayersList';
import PlayersForm from './elements/PlayersForm';

/**
 * Component to manage players
 */
const Players = () => {

    return (
    <>
      {/* List */}
      <PlayersList />
      {/* Form */}
      <PlayersForm />
    </>
    )
}

export default Players;
