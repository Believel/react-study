import React, { Component } from 'react';

class Theme extends Component {
  constructor(props) {
    super(props)
  }
  handleSwitchColor(color){
    if (this.props.handleColor) {
      this.props.handleColor(color)
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleSwitchColor.bind(this, 'red')} style={{ color: this.props.themeColor }}>Red</button>
        <button className="btn" onClick={this.handleSwitchColor.bind(this, 'blue')} style={{ color: this.props.themeColor }}>Blue</button>
      </div>
    );
  }
}

export default Theme;