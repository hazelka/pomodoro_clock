let id = 0;

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: id++,
					text: action.text,
					completed: false
				}
			];
		case 'COMPLETE_TODO':
			return state.map(todo => 
				action.id === todo.id 
					? {...todo, completed: true}
					: todo); 
		default:
			return state;
	}
};

export default todos;