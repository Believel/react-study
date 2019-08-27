import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h4>案例2：计数器</h4>
        <p>{this.props.counter}</p>
        <button className="btn" onClick={this.props.incrementCounter}>+</button>
        <button className="btn"  onClick={this.props.decrementCounter}>-</button>
        <button className="btn" onClick ={
          () => {
            setTimeout(this.props.incrementCounter, 1000)
          }
        }>过一秒后+</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter.number
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCounter: () => {
      dispatch({type: 'INCREMENT'})
    },
    decrementCounter: () => {
      dispatch({type: 'DECREMENT'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);