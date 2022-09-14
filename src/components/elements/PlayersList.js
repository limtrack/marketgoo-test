// React
import React, { useEffect } from 'react';
// Redux
import { useSelector } from 'react-redux';
import * as PlayersActions from '../../store/players/actions';
// Hooks
import useActions from '../../hooks/UseActions';
// Components
import Table from '../ui/Table';

/**
 * Component to list the players
 */
const PlayersList = () => {
  // State
  const players = useSelector((state) => state.players);
  // Reducers' actions
  const playersActions = useActions(PlayersActions);

  // EVENTS

  /**
   * Initial load (componentDidMount)
   */
  useEffect(() => {
    debugger
    // Get players
    playersActions.setPlayerFromServer()
  }, [])

  // METHODS

  /**
   * Remove player
   * 
   * @param {String} id - UID player 
   */
  function handleDeletePlayer(id = null) {
    playersActions.deletePlayerInServer({ id })
  }

  return (
    <Table headers={['Player', 'Team', 'Score', 'Actions']}>
      { players.map((p) =>
        <tr>
            <td>{p.name}</td>
            <td>{p.team}</td>
            <td>{p.score}</td>
            <td>
              <button onClick={() => handleDeletePlayer(p.id)}>Remove</button>
            </td>
        </tr>
      )}
    </Table>
  )

}

export default PlayersList;