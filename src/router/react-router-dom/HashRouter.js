import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class HashRouter extends Component {
  // 定义子级的参数类型
  static childContextTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 定义返回给子级的值
  getChildContext() {
    return {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      },
      history: {
        push(path){
          window.location.hash = path
        }
      },
      match: {
        params: {}
      }
    }
  }
  componentWillMount() {
    // 首次启动需要给默认hash值
    window.location.hash = window.location.hash || '/'
    let render = () => {
      // 想要重新渲染，比如只掉函数不传参是不执行的，没意义，所以要传个空对象，让他重新渲染
      this.setState({});
    }
    window.addEventListener('hashchange', render)
    
  }
  render() {
    return this.props.children
  }

}