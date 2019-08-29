import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';
class Logout extends Component {
  render() {
    return (
      <div>
        token: {this.props.token} <br/>
        error: {this.props.error} <br/>
        <button onClick={this.props.logout}>退出</button>
      </div>
    );
  }
}

export default connect(state => state.user, actions)(Logout);