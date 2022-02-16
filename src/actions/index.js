import {
	CHANGE_ROOM,
	CHANGE_NAME,
	SET_DB,
	TEST_OUT,
	MESSSAGE_ADD,
	SET_NEW_MESSAGE,
	CLEAR_LOGS,
} from './types';

export const testAction = () => {
	return {
		type: TEST_OUT,
		payload: 'Succcess',
	};
};

export const changeRoom = room => async (dispatch, getState) => {
	await dispatch(clearLogs());

	dispatch({
		type: CHANGE_ROOM,
		payload: room,
	});
};

export const changeName = name => {
	return {
		type: CHANGE_NAME,
		payload: name,
	};
};

export const storeDB = db => {
	return {
		type: SET_DB,
		payload: db,
	};
};

export const grabMessage = data => {
	return {
		type: SET_NEW_MESSAGE,
		payload: data,
	};
};

export const clearLogs = () => {
	return {
		type: CLEAR_LOGS,
	};
};
