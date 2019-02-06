import { LOGIN_USER, LOGIN_SUCCESS } from '../constants';

const initialState = {
	username: '',
  password: 'Ovanah123',
	token: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				...state,
				username: action.payload,
				token: action.payload + state.password
			};
		}

		default:
			return state;
	}
}

export default userReducer;
