export const increaseLength = type => {
	return ({
		type: `INCREASE_${type.toUpperCase()}_LENGTH`
	});
};

export const decreaseLength = type => {
	return ({
		type: `DECREASE_${type.toUpperCase()}_LENGTH`
	});
};

export const switchTimer = session => {
	return ({
		type: 'SWITCH_TIMER',
		session
	});
}; 

export const tick = () => ({ type: 'TICK' });

export const reset = () => ({type: 'RESET' });

export const addTodo = text => ({
	type: 'ADD_TODO',
	text
});

export const completeTodo = id => ({
	type: 'COMPLETE_TODO',
	id
});