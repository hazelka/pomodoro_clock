import React from 'react';
import { connect } from 'react-redux';
import { increaseLength, decreaseLength } from './actions';

const Length = ({ type, time, onIncrease, onDecrease }) => {
		return (
			<div className="length">
				<h2>{type} Length</h2>
				<button onClick={() => onIncrease(type)}>
					<i className="fa fa-plus fa-2x"></i>
				</button>
				<span> {time} </span>
				<button onClick={() => onDecrease(type)}>
					<i className="fa fa-minus fa-2x"></i>
				</button>
			</div>
		);
	
};

const mapStateToProps = (state, ownProps) => ({
	time: ownProps.type === "Session" 
		? state.clock.sessionTime 
		: state.clock.breakTime
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onIncrease: () => dispatch(increaseLength(ownProps.type)),
	onDecrease: () => dispatch(decreaseLength(ownProps.type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Length);