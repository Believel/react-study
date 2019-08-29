import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import '../style/index.css';
class Counter extends Component {
  render() {
    return (
      <div className="container">
        <p>{this.props.number}</p>
        <button className="btn" onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default connect(
  state => ({...state}),
  actions
)(Counter);