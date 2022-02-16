import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import UpdateName from './UpdateName';
import './App.css';
import { initializeApp } from 'firebase/app';
import { storeDB, grabMessage } from '../actions/';

import {
	getFirestore,
	collection,
	onSnapshot,
	query,
	where,
	orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC26qRZTv73_X4AOW9QuddSXxi66AeE1CU',
	authDomain: 'chatroom-e98f2.firebaseapp.com',
	databaseURL: 'https://chatroom-e98f2-default-rtdb.firebaseio.com',
	projectId: 'chatroom-e98f2',
	storageBucket: 'chatroom-e98f2.appspot.com',
	messagingSenderId: '539579870026',
	appId: '1:539579870026:web:38a1531e020d1ff2d0efb3',
};

const app = initializeApp(firebaseConfig);

function App() {
	const db = useMemo(() => getFirestore(app), []);

	const dispatch = useDispatch();
	const room = useSelector(state => state.chatSettings.room);

	useEffect(() => {
		dispatch(storeDB(db));
	}, [dispatch, db]);

	useEffect(() => {
		const chats = collection(db, 'chats');

		const q = query(
			chats,
			orderBy('created_at', 'asc'),
			where('room', '==', room),
		);

		let unsub = onSnapshot(q, snapshot => {
			snapshot.docChanges().forEach(change => {
				if (change.type === 'added') {
					dispatch(grabMessage(change.doc.data()));
				}
			});
		});

		//remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
		return () => unsub();
	}, [room, dispatch, db]);

	return (
		<div className='App'>
			<div className='container my-4'>
				<Header />
				<ChatWindow />
				<div className='UIcontainer'>
					<ChatInput />
					<UpdateName />
				</div>
			</div>
		</div>
	);
}

export default App;
