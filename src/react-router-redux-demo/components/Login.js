import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let username = this.username.value;
    let password = this.password.value
    this.props.login({
      username,
      password
    })
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          用户名： <input type="text" ref={input => this.username = input}/><br/>
          密码： <input type="password" ref={input => this.password = input}/><br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default connect(state => state.user, actions)(Login);