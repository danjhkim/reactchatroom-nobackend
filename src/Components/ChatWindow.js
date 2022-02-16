import { useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { animateScroll } from 'react-scroll';
import { useEffect } from 'react';

const ChatWindow = () => {
	const chatLog = useSelector(state => state.chatSettings.chatLog);

	//! this is redundant with flex-direction
	// useEffect(() => {
	// 	function scrollToBottom() {
	// 		animateScroll.scrollToBottom({
	// 			containerId: 'scroller',
	// 		});
	// 	}

	// 	scrollToBottom();
	// }, [chatLog]);

	const renderChat = () => {
		if (chatLog) {
			return chatLog.map((item, index) => {
				let date = formatDistanceToNow(item.created_at.toDate());

				return (
					<li className='list-group-item' key={index}>
						<span className='username'>{item.username}: </span>
						<span className='message'>{item.message}</span>
						<br />
						<div className='time'>{date}</div>
					</li>
				);
			});
		} else {
			return 'empty chat';
		}
	};

	return (
		<div id='scroller' className='chat-window'>
			<ul className='chat-list list-group'>{renderChat()}</ul>
		</div>
	);
};

export default ChatWindow;
