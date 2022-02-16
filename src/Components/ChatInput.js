import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ChatInput = () => {
	const db = useSelector(state => state.fireBaseDb.db);
	const name = useSelector(state => state.chatSettings.name);
	const room = useSelector(state => state.chatSettings.room);
	const [message, setMessage] = useState('');

	const messenger = e => {
		e.preventDefault();
		const addChat = async message => {
			if (db) {
				try {
					//format chat object
					const now = new Date();
					const chat = {
						message,
						username: name,
						room,
						created_at: Timestamp.fromDate(now),
					};
					// save the chat document
					// const response = await addDoc(collection(db, 'chatroom'), chat);
					await addDoc(collection(db, 'chats'), chat);

					setMessage('');
				} catch (err) {
					console.log(err);
				}
			}
		};
		addChat(message);
	};

	return (
		<form action='' className='new-chat my-3' onSubmit={e => messenger(e)}>
			<div className='input-group'>
				<div className='input-group-preprend'>
					<div className='input-group-text'>Enter message:</div>
				</div>
				<input
					type='text'
					id='message'
					className='form-control'
					required={true}
					onChange={e => setMessage(e.target.value)}
					value={message}
				/>
				<div className='input-group-append'>
					<input type='submit' className='btn' value='send' />
				</div>
			</div>
		</form>
	);
};

export default ChatInput;
