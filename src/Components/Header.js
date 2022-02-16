import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoom } from '../actions';

const Header = () => {
	const [active, setActive] = useState('general');
	const dispatch = useDispatch();
	const room = useSelector(state => state.chatSettings.room);

	const roomChanger = changedroom => {
		if (changedroom === room) {
			return;
		}
		setActive(changedroom);
		dispatch(changeRoom(changedroom));
	};

	//current the selected color is being overrided
	const myColor = position => {
		if (active === position) {
			return 'pink';
		} else {
			return;
		}
	};

	return (
		<div className='header'>
			<h1 className='my-4 text-center'>React Chat</h1>
			<div className='chat-rooms mb-3 text-center'>
				<div className='my-2'>Choose a chatroom:</div>
				<button
					style={{ background: myColor('general') }}
					className='btn navbutton'
					id='general'
					onClick={() => roomChanger('general')}>
					General
				</button>
				<button
					style={{ background: myColor('gaming') }}
					className='btn navbutton'
					id='gaming'
					onClick={() => roomChanger('gaming')}>
					Gaming
				</button>
				<button
					style={{ background: myColor('music') }}
					className='btn navbutton'
					id='music'
					onClick={() => roomChanger('music')}>
					Music
				</button>
				<button
					style={{ background: myColor('turtles') }}
					className='btn navbutton'
					id='turtles'
					onClick={() => roomChanger('turtles')}>
					Turtles
				</button>
			</div>
		</div>
	);
};

export default Header;
