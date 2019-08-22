// 上下文学习
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <Title/>
      </div>
    )
  }
}
class Title extends Component {
  static contextTypes = {
    color: PropTypes.string
  }
  render() {
    return (
      <div>
        <h3 style={{color: this.context.color}}>我是标题</h3>
      </div>
    )
  }
}
class Main extends Component {
  render() {
    return (
      <div>
        <Content/>
      </div>
    )
  }
}
class Content extends Component {
  static contextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  }
  render() {
    // this.context
    return (
      <div>
        <p style={{color: this.context.color}}>我是内容</p>
        <button onClick={() => this.context.setColor('green')}>变绿</button>
      </div>
    )
  }
}
/**
 * 1. 在父组件中定义 childContextTypes 子上下文类型
 * 2. 在父组件里还要定义一个getChildContext用来返回上下文对象
 * 3. 在要接收这些定义的上下文中的组件中定义contextTypes
 */
class HomePage extends Component {
  static childContextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  }
  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor
      
    }
  }
  constructor() {
    super()
    this.state = {
      color: 'red'
    }
  }
  setColor = (color) => {
    this.setState({color})
  }
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default HomePage;