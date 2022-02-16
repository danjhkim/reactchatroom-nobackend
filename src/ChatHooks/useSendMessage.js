import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { collection, addDoc, Timestamp } from 'firebase/firestore';

const useSendMessage = (username, room, message) => {
	const db = useSelector(state => state.fireBaseDb.db);

	useEffect(() => {
		const addChat = async message => {
			if (db) {
				try {
					//format chat object
					const now = new Date();
					const chat = {
						message,
						username,
						room,
						created_at: Timestamp.fromDate(now),
					};
					// save the chat document
					// const response = await addDoc(collection(db, 'chatroom'), chat);
					const response = await addDoc(
						collection(db, 'ProdRoom'),
						chat,
					);

					console.log(response);
				} catch (err) {
					console.log(err);
				}
			}
		};
		addChat(message);
	}, [username, room, message, db]);
};

useSendMessage.defaultProps = {
	username: 'anon',
	room: 'general',
};

export default useSendMessage;
