import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  // 默认的静态属性
  static defaultProps = {
    count: 0
  }
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      count: props.count
    }
  } 
  componentWillMount() {
    console.log('1. 组件将要挂载')
  }
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count +1
    }))
  }
  // 询问组件是否更新, 只要其中一个属性值改变，默认就会更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log(' 11.shouldComponentUpdate 询问组件是否更新')
    console.log(nextState)
    return true

  }
  // 组件是否更新 -> 走组件将要更新
  componentWillUpdate() {
    console.log('22. componentWillUpdate 组件将要更新')
  }
  componentDidUpdate() {
    console.log('33. componentDidUpdate 组件更新完成')
  }
  // 组件卸载
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  destroy = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
  }
  render() {
    console.log('2. render挂载')
    return (
      <div>
        父计数器： {this.state.count}
        <button onClick={this.handleClick}>+</button>
        <button onClick={ this.destroy }>destroy</button>
        <SubCounter count={this.state.count }/>
      </div>
    );
  }
  componentDidMount() {
    console.log('3. componentDidMount 组件挂载完成')
  }
}
class SubCounter extends Component {
  // 当子组件接收父组件的新属性时触发的钩子函数
  componentWillReceiveProps() {
    console.log('subCounter componentWillReceiveProps')
  }
  render() {
    return (
      <div>子组件： {this.props.count}</div>
    )
  }
}
export default Counter;