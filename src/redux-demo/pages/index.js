import React, { Component } from 'react';
import '../style/index.css';
import Header from '../component/Header';
import Content from '../component/Content';

class App extends Component {
  render() {
    return (
      <div className="myApp">
        <h2>redux使用案例</h2>
        <hr/>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;