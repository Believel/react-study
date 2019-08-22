import React, { Component } from 'react';

class List extends Component {
  render() {
    // Fragment不会生成元素标签
    return (
      
      <React.Fragment>
        {
          this.props.message.map((item, index) => <li key={index}>{item}</li>)
        }
      </React.Fragment>
    )
  }
}
class Fragment extends Component {
  constructor() {
    super()
    this.state = {
      data: [1, 2, 3, 4]
    }
  }
  render() {
    return (
      <div>
        <ul>
          <List message={this.state.data}/>
        </ul>
      </div>
    );
  }
}

export default Fragment;