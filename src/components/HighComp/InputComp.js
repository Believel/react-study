import React, { Component } from 'react';

import Local from './Local';
class InputComp extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {/* ref ={input => this.input = input} */}
        <input type="text" defaultValue={this.props.data}  onChange={this.props.save}/><br/>
      </div>
    );
  }
}

export default Local(InputComp, 'username', '用户名');