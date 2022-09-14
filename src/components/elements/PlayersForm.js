// React
import React from 'react';
// Redux
import * as PlayersActions from '../../store/players/actions';
// Hooks
import useActions from '../../hooks/UseActions';
// Form validations
import { useForm } from 'react-hook-form';

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
    alert('Player added') 
  }
  

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <h4>Add new players</h4>
      {/* Name */}
      <input 
        placeholder="player name"
        { ...register('name', { required: { value: true, message: 'Required field' } }) }
      />
      { errors.name ? (<span>{ errors.name.message } </span>) : null } 
      {/* Team */}
      <input
        placeholder="team name"
        { ...register('team', { required: { value: true, message: 'Required field' } }) }
      />
      { errors.team ? (<span>{ errors.team.message } </span>) : null }
      {/* Score */}
      <input
        placeholder="team score"
        { ...register('score', { required: { value: true, message: 'Required field' } }) }
      />
      { errors.score ? (<span>{ errors.score.message } </span>) : null }
      <button type="submit">Add</button>
    </form>
  );
}

export default PlayersForm;
