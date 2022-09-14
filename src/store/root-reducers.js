import { combineReducers } from 'redux';
import players from './players/reducers';

const rootReducer = combineReducers({ players });

export default rootReducer;
