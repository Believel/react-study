import React, { Component } from 'react'
import PropTypes from 'prop-types';
import pathToRegexp  from 'path-to-regexp'; // 将字符串转成正则表达式

export default class Route extends Component {
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }
  constructor(props) {
    super(props)
    let {path} = props;
    this.keys = []
    this.reg = pathToRegexp(path, this.keys, { end: false})
    // this.keys是参数变量组成的数组：例如/user/detail/:id/:name
    // 如果匹配到的话就是this.keys = ['id', 'name']
    this.keys = this.keys.map(key => key.name)

  }
  render() {

    let { path, component: Component } = this.props;
    let { location } = this.context
    let result = location.pathname.match(this.reg)
    if (result) {
      let params =this.keys.length > 0 ? this.keys.reduce((memo, key, idx) => {
        memo[key] = result[idx + 1]
        return memo
      }, {}): {}
      let match = {
        url: path,
        params: params,
        path: window.location.hash.slice(1)
      }
      return <Component {...this.context} match={match}/>
    } else {
      return null
    }
  }
}