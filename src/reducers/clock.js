const initialState = {
	sessionTime: 25,
	breakTime: 5,
	interval: 1500
};

const clock = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_SESSION_LENGTH':
			return {
				...state, 
				sessionTime: state.sessionTime + 1,
				interval: state.interval + 60
			};
		case 'DECREASE_SESSION_LENGTH':
			return state.sessionTime === 1 ? state : {
				...state, 
				sessionTime: state.sessionTime - 1,
				interval: state.interval - 60
			};
		case 'INCREASE_BREAK_LENGTH':
			return {
				...state, 
				breakTime: state.breakTime + 1
			};
		case 'DECREASE_BREAK_LENGTH':
			return state.breakTime === 1 ? state : {
				...state, 
				breakTime: state.breakTime - 1
			};
		case 'SWITCH_TIMER':
			return action.session ? ({
				...state,
				interval: state.sessionTime * 60
			}) : ({
				...state,
				interval: state.breakTime * 60
			});		
		case 'TICK':
			return {
				...state,
				interval: state.interval - 1
			};
		case 'RESET':
			return {
				...state,
				interval: state.sessionTime * 60
			};
		default:
			return state;
	}
};

export default clock;