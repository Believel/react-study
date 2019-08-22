import React, { Component } from 'react';

import Local from './Local';
class MobileComp extends Component {
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

export default Local(MobileComp, 'mobile', '手机号');