import React, { Component } from 'react';
function Dialog(props) {
  return (
    <div style={{border: '1px solid blue' }}>
      <h1 className="dialog-title">
        {props.title}
      </h1>
      <p className="dialog-message">
        {props.message}
      </p>
      {props.children}
    </div>
  )
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props)
    this.state = { login: ''}
  }
  handleChange = (e) => {
    this.setState({
      login: e.target.value
    })
  }
  handleClick = (e) => {
    alert(`Welcome aboard, ${this.state.login}`)
  }
  render() {
    return (
      <div>
        <Dialog title="Mars Exploration Program" message="How should we refer to you?">
          <input type="text"
            value={this.state.login}
            onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Sign Me Up!</button>
        </Dialog>
      </div>
    );
  }
}

export default SignUpDialog;