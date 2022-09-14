export const CREATE_PLAYER_IN_SERVER = 'CREATE_PLAYER_IN_SERVER'; // saga action
export const DELETE_PLAYER_IN_SERVER = 'DELETE_PLAYER_IN_SERVER'; // saga action
export const SET_PLAYERS_FROM_SERVER = 'SET_PLAYERS_FROM_SERVER'; // saga action
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const SET_PLAYERS = 'SET_PLAYERS';

/**
 * Create player in server
 * 
 * @param {Object} payload - player data
 * @return {Object} - redux action
 */
export function createPlayerInServer(payload) {
  return {
    type: CREATE_PLAYER_IN_SERVER,
    payload,
  };
}

/**
 * Delete player in server
 * 
 * @param {Object} payload - player data
 * @return {Object} - redux action
 */
export function deletePlayerInServer(payload) {
  return {
    type: DELETE_PLAYER_IN_SERVER,
    payload,
  };
}

/**
 * Set players from server
 * 
 * @return {Object} - redux action
 */
export function setPlayerFromServer() {
  return {
    type: SET_PLAYERS_FROM_SERVER
  };
}

/**
 * Create player in store
 * 
 * @param {Object} payload - player data
 * @return {Object} - redux action
 */
export function createPlayer(payload) {
  return {
    type: CREATE_PLAYER,
    payload,
  };
}

/**
 * Delete player in store
 * 
 * @param {Object} payload - player data
 * @return {Object} - redux action
 */
export function deletePlayer(payload) {
  return {
    type: DELETE_PLAYER,
    payload,
  };
}

/**
 * Set players in store
 * 
 * @param {Array} payload - players array
 * @return {Object} - redux action
 */
export function setPlayers(payload) {
  return {
    type: SET_PLAYERS,
    payload,
  };
}
