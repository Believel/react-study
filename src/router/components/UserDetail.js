import React, { Component } from 'react';

export default class UserDetail extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    let userStr = localStorage.getItem('users')
    let users = userStr? JSON.parse(userStr): []

    // 如何拿到地址栏中传的参数？？？
    let user = users.find(user => user.id == params.id)
    this.setState({
      user
    })
  }
  render() {
    let user = this.props.user
   return (
     <div>{user.id} : { user.username}</div>
   )
  }
}