import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    username: '',
    isGoing: false
  }
  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    console.log('A username is submited: ' + JSON.stringify(this.state))
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
          <label>
            Is going:
            <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default NameForm;