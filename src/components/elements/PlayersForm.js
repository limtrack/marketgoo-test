// React
import React from 'react';
// Redux
import * as PlayersActions from '../../store/players/actions';
// Hooks
import useActions from '../../hooks/UseActions';
// Form validations
import { useForm } from 'react-hook-form';
// Components
// import { Button } from "@marketgoo/ola"; <-- El elemento se dibuja, pero los CSS no se cargaban
// Utils
import { setClassNames } from '../../utils'
// Styles
import './playersForms.css';

/**
 * Component to create new players (Formulary)
 */
const PlayersForm = () => {
  
  // Reducers' actions
  const playersActions = useActions(PlayersActions);
  // Form validations
  const { handleSubmit, formState: { errors }, register, reset } = useForm();

  // METHODS

  /**
   * "handler" "onSubmit" formulary
   * 
   * @param {object} data - player data
   */
  async function handleOnSubmit(data) {
    // Create player in server
    playersActions.createPlayerInServer(data)
    // Reset form
    reset()
    // TODO - a handler more "cool" for the success messages
    console.log('Player added') 
  }
  

  return (
    <>
      <h4>Add new players</h4>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        {/* Name */}
        <div>
          <input 
            className={setClassNames(
              errors.name
                ? 'error'
                : '',
              ''
            )}
            placeholder="player name"
            { ...register('name', { required: { value: true, message: 'Required field' } }) }
          />
          { errors.name ? (<span className="error">{ errors.name.message } </span>) : null }
        </div> 
        {/* Team */}
        <div>
          <input
            className={setClassNames(
              errors.name
                ? 'error'
                : '',
              ''
            )}
            placeholder="team name"
            { ...register('team', { required: { value: true, message: 'Required field' } }) }
          />
          { errors.team ? (<span className="error">{ errors.team.message } </span>) : null }
        </div>
        {/* Score */}
        <div>
          <input
            className={setClassNames(
              errors.name
                ? 'error'
                : '',
              ''
            )}
            placeholder="team score"
            { ...register('score', { required: { value: true, message: 'Required field' } }) }
          />
          { errors.score ? (<span className="error">{ errors.score.message } </span>) : null }
        </div>
        {/* Actions */}
        <div>
          <button  type="submit">Add</button>
        </div>
      </form>
    </> 
  );
}

export default PlayersForm;
