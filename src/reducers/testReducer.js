import { TEST_OUT } from '../actions/types';

const testReducer = (state = {}, action) => {
	switch (action.type) {
		case TEST_OUT:
			return { ...state, test: action.payload };
		default:
			return state;
	}
};

export default testReducer;
