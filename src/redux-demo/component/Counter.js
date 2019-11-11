import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';
import Action from '../store/actions/counter';

// let Actions = bindActionCreators(Action)

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
        <button className="btn" onClick={this.props.thunkIncrement}>过一秒后加1(异步)</button>
        <button className="btn" onClick={this.props.promiseIncrement}>promise(加1)</button>
        <button className="btn" onClick={this.props.payloadIncrement}>promise(加1)</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter.number
  }
}
const mapDispatchToProps = Action



export default connect(mapStateToProps, mapDispatchToProps)(Counter);