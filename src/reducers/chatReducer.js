import {
	CHANGE_ROOM,
	CLEAR_LOGS,
	CHANGE_NAME,
	SET_NEW_MESSAGE,
} from '../actions/types';

const chatReducer = (
	state = { name: 'anon', room: 'general', chatLog: [] },
	action,
) => {
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.payload };
		case CHANGE_ROOM:
			return { ...state, room: action.payload };
		case SET_NEW_MESSAGE:
			return { ...state, chatLog: [...state.chatLog, action.payload] };
		case CLEAR_LOGS:
			return { ...state, chatLog: [] };
		default:
			return state;
	}
};

export default chatReducer;
