import React from 'react';
import Length from './Length';
import Clock from './Clock';
import TodoList from './TodoList';

const App = () => {
	return (
		<div className="container">
			<div className="clock-container">
				<h1>Pomodoro Clock</h1>
				<div className="length-container">
					<Length type="Break" />
					<Length type="Session" />
				</div>
				<Clock />
			</div>
			<TodoList />
		</div>
	);
}

export default App;