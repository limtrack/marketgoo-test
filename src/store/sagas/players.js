// reducer's actions
import {
  CREATE_PLAYER,
  CREATE_PLAYER_IN_SERVER,
  DELETE_PLAYER,
  DELETE_PLAYER_IN_SERVER,
  SET_PLAYERS,
  SET_PLAYERS_FROM_SERVER
} from '../players/actions';
// Services
import { createPlayer, deletePlayerById, getManyPlayers } from '../../services/players';
// Saga
import { takeLatest, put } from 'redux-saga/effects';

/**
 * Create player in server
 * 
 * @param {Object} payload - player data
 */
function* createPlayerInServer({ payload }) {
  try {
    // Create player in server
    const createdUser = yield createPlayer(payload);
    // Add player in store
    yield put({
      type: CREATE_PLAYER,
      payload: createdUser,
    });
  } catch (err) {
    // TODO - a handler more "cool" for the errors
    console.log(err.message)
  }
}

/**
 * Delete player in server
 * 
 * @param {Object} payload - player data
 */
function* deletePlayerInServer({ payload }) {
  try {
    // Delete player in server
    yield deletePlayerById(payload.id);
    // Remove player in store
    yield put({
      type: DELETE_PLAYER,
      payload: { id: payload.id },
    });
  } catch (err) {
    // TODO - a handler more "cool" for the errors
    console.log(err.message)
  }
}

/**
 * Set players from server
 */
 function* setPlayersFromServer() {
  try {
    // Get players from server
    const players = yield getManyPlayers();
    // Add players in store
    yield put({
      type: SET_PLAYERS,
      payload: players,
    });
  } catch (err) {
    // TODO - a handler more "cool" for the errors
    console.log(err.message)
  }
}

// Watcher functions
export function* watchPlayersActions() {
  yield takeLatest(CREATE_PLAYER_IN_SERVER, createPlayerInServer);
  yield takeLatest(DELETE_PLAYER_IN_SERVER, deletePlayerInServer);
  yield takeLatest(SET_PLAYERS_FROM_SERVER, setPlayersFromServer);
}
