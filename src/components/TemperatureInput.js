import React, { Component } from 'react';
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};




class TemperatureInput extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    let temperature = this.props.temperature
    let scale = this.props.scale
    return (
      <div>
        <fieldset>
          <legend> Enter temperature in {scaleNames[scale]}</legend>
          <input type="text"
            value={ temperature }
            onChange= { this.handleChange}/>
            
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;