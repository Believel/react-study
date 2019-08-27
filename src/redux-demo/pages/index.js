import React, { Component } from 'react';
import '../style/index.css';
import Header from '../component/Header';
import Content from '../component/Content';

import Counter from '../component/Counter';
import Todos from '../component/Todos';

class App extends Component {
  render() {
    return (
      <div className="myApp">
        <h2>redux、react-redux使用案例</h2>
        <hr/>
        <Header/>
        <Content/>
        <hr/>
        <Counter/>
        <hr/>
        <Todos/>
      </div>
    );
  }
}

export default App;