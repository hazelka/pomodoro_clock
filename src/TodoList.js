import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from './actions';

const TodoList = ({ todos, addTodo, completeTodo }) => {
	let input;
	return (
		<div className="todolist-container">
			<h2>Todo List</h2>
			<form onSubmit={e => {
				e.preventDefault();
				addTodo(input.value);
				input.value = "";
			}}>
				<input ref={node => input = node}/>
				<button className="todo button" type="submit">Add Todo</button>
			</form>
			<ul className="todo">
				{todos.map(todo => 
					<li 
						key={todo.id} 
						onClick={() => completeTodo(todo.id)}
						style={{textDecoration: todo.completed ? "line-through" : "none"}}
					>
						{todo.completed 
							? <i className="fa fa-check-square-o"></i> 
							: <i className="fa fa-square-o"></i>}
						{` ${todo.text}`}
					</li>)}
			</ul>
		</div>

	);
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	addTodo: text => dispatch(addTodo(text)),
	completeTodo: id => dispatch(completeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);