import React, { Component, PureComponent } from 'react';

// PureComponent是继承Component的，并且对shouldComponentUpdate进行了改写，里面浅比较了nextProps和nextState
// class IndexPage extends PureComponent {
class IndexPage extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: false
    }
    // 创建Refs并通过ref属性联系到React组件
    this.myRef = React.createRef()
    console.log('constructor')
  }
  changeState = () => {
    console.log(this.myRef.current)
    this.setState({
      isShow: true
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div ref={this.myRef}>{this.state.isShow.toString()}</div>
      </div>
    );
  }
}


export default IndexPage;