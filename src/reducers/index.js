import { combineReducers } from 'redux';
import testReducer from './testReducer';
import fireBaseDbReducer from './fireBaseDbReducer';
import chatReducer from './chatReducer';

export default combineReducers({
	test: testReducer,
	fireBaseDb: fireBaseDbReducer,
	chatSettings: chatReducer,
});
