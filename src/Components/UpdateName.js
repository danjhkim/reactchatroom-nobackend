import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../actions';
import { useCookies } from 'react-cookie';

const UpdateName = () => {
	const [cookies, setCookie] = useCookies(['name']);
	const dispatch = useDispatch();

	if (cookies.name) {
		dispatch(changeName(cookies.name));
	}
	const name = useSelector(state => state.chatSettings.name);

	const formSubmit = e => {
		e.preventDefault();
		setCookie('name', e.target[0].value, { path: '/' });
		dispatch(changeName(e.target[0].value));
	};

	return (
		<form className='new-name my-3' onSubmit={e => formSubmit(e)}>
			<div className='nameTitle'>Current name: {name}</div>
			<div className='input-group'>
				<div className='input-group-prepend'>
					<div className='input-group-text'>Update name:</div>
				</div>
				<input
					type='text'
					id='name'
					className='form-control'
					required={true}
				/>
				<div className='input-group-append'>
					<input type='submit' className='btn' value='update' />
				</div>
			</div>
			<div className='update-msg'></div>
		</form>
	);
};

export default UpdateName;
