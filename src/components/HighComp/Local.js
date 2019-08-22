import React, { Component } from 'react';

// 定义高阶组件：高阶组件是一个函数，必须接收一个组件，返回一个新的组件。
// 作用：复用重复的代码逻辑
export default function Local(OldComponent, name, placeholder) {
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = {
        data: ''
      }
    }
    componentDidMount() {
      this.setState({
        data: localStorage.getItem(name) || placeholder
      })
    }
    save = (e) => {
      localStorage.setItem(name, e.target.value)
    }
    render() {
      return(
        <OldComponent save={this.save} data={this.state.data}/>
      ) 
    }
  }
  return NewComponent
}