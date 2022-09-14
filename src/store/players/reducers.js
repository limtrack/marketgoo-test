// Types
import { CREATE_PLAYER, DELETE_PLAYER, SET_PLAYERS } from './actions';
// State
import initialState from '../state/initialState';
// Libs
import { isNil } from 'lodash';

const { players } = initialState;

/**
 * Players reducer
 * 
 * @param {Object | Array} state - initial state 
 * @param {String} action - action to execute 
 * @returns 
 */
const playersReducer = (state = players, action) => {
  // action's params
  const { type = null, payload = null } = action;
  // reducer's actions
  switch (type) {
    case CREATE_PLAYER: {
      return !isNil(payload) && typeof payload === 'object'
        ? [...state, { payload }]
        : state;
    }
    case DELETE_PLAYER: {
      if (isNil(payload) || isNil(payload.id)) {
        return state;
      }

      // found and remove
      const index = state.indexOf(payload.id);
      if (index > -1) {
        state.splice(index, 1);
      }

      return state;
    }
    case SET_PLAYERS: {
      return !isNil(payload) && Array.isArray(payload)
        ? payload
        : state;
    }
    default: {
      return state;
    }
  }
};


export default playersReducer