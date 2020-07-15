import React from 'react';
import { connect } from 'react-redux';
import { tick, switchTimer, reset } from './actions';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			running: false,
			session: true
		};
	}

	clockify = interval => {
		let minute = Math.floor(interval / 60);
		let second = interval % 60;
		minute = minute < 10 ? `0${minute}` : `${minute}`;
		second = second < 10 ? `0${second}` : `${second}`;
		return minute + " : " + second;
	};

	clock = (() => {
		let timer;
		const start = () => {
			const tick = () => {
				if (this.props.interval > 0) {
					this.props.tick();
				} else {
					this.setState({session: !this.state.session});
					this.props.switchTimer(this.state.session);
				}
			};
			timer = setInterval(() => tick(), 1000);
		};
		const stop = () => {
			clearInterval(timer);
		};
		return {
			start: start,
			stop: stop
		};
	})();

	handleClock = () => {
		this.state.running
			? this.clock.stop()
			: this.clock.start();
		this.setState({
			running: !this.state.running
		});
	};

	handleReset = () => {
		this.clock.stop();
		this.setState({
			running: false,
			session: true
		});
		this.props.reset();
	};

	render() {
		return (
			<div className="timer-container">
				<div className="timer">
					<h2>{this.state.session ? "Session" : "Break"}</h2>
					<div className="time">{this.clockify(this.props.interval)}</div>
				</div>
				<button onClick={this.handleClock}>
					<i className="fa fa-play fa-2x"></i>
					<i className="fa fa-pause fa-2x"></i>
				</button>
				<button onClick={this.handleReset}>
					<i className="fa fa-refresh fa-2x"></i>
				</button>
			</div>
		);
	}
}



const mapStateToProps = state => ({
	interval: state.clock.interval
});

const mapDispatchToProps = dispatch => ({
	tick: () => dispatch(tick()),
	reset: () => dispatch(reset()),
	switchTimer: session => dispatch(switchTimer(session)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);

