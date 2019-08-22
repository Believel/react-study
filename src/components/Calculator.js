import React, { Component } from 'react';

import TemperatureInput from './TemperatureInput';

// !状态提升
// ! 父级 -> 子级  props
// ! 子级 -> 父级  事件方法
// 转成摄氏温度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 转成华氏温度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 转换
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  } else {
    return <p>The water would not boil.</p>
  }
}
class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }
  }
  handleCelsiusChange = (value) => {
    this.setState({
      temperature: value,
      scale: 'c'
    })
  }
  handleFahrenheitChange = (value) => {
    this.setState({
      temperature: value,
      scale: 'f'
    })
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius): temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature
    return (
      <div> 
       <TemperatureInput temperature={celsius} scale="c" onTemperatureChange={this.handleCelsiusChange}/>
       <TemperatureInput temperature={fahrenheit} scale="f" onTemperatureChange={this.handleFahrenheitChange}/>
       <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

export default Calculator;