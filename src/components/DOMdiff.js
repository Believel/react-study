import React, { Component } from 'react';
class Counter extends Component {
  constructor() {
    super()
    this.date = new Date().toLocaleTimeString()
  }
  componentWillMount() {
    console.log(this.date + ' componentWillMount 将挂载')
  }
  componentDidMount() {
    console.log(this.date + ' componentDidMount 挂载完成')
  }
  componentWillUnmount() {
    console.log(this.date + ' componentWillUnmount 组件卸载')
  }
  render() {
    return <span>Counter</span>
  }
}

class DOMdiff extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        {
          this.state.show ? <div><Counter/> </div> : <span><Counter/></span>
        }
      </div>
    );
  }
}

export default DOMdiff;