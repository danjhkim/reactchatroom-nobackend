import { SET_DB } from '../actions/types';

const fireBaseDbReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_DB:
			return { ...state, db: action.payload };
		default:
			return state;
	}
};

export default fireBaseDbReducer;
