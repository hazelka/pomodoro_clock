import { combineReducers } from 'redux';
import clock from './clock';
import todos from './todos';

export default combineReducers({
	clock,
	todos
});