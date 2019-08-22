import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import NameForm from './components/NameForm';
// import Calculator from './components/Calculator';
// import SignUpDialog from './components/SignUpDialog';
// import Counter from './components/Counter';                // 生命周期函数
// import IndexPage from './components/IndexPage';            // PureComponent vs Component
// import DOMdiff from './components/DOMdiff';
// import HomePage from './components/HomePage';              // 上下文Context
// import Fragment from './components/Fragment';              // 代码片段
import Portals from './components/Portals';
// import HighComp from './components/HighComp/HighComp';     // 高阶组件

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return (<div>Welcome back!</div>)
//   } else {
//     return (<div>Please sign up</div>)
//   }
// }

import {Link} from './router/react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
    // !列表
    const numbers = [1, 2, 3, 4, 5]
    const listItems =  numbers.map((number) => {
      return <li key={number.toString()}>{number}</li>
    })
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header" id="header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting isLoggedIn={true}></Greeting>
          <ul> {listItems} </ul>
          <NameForm />
          <Calculator/>
          <SignUpDialog/>
          <Counter />
        </header> */}
  
        {/* <IndexPage/> */}
        {/* <DOMdiff/> */}
        {/* <HomePage/> */}
        {/* <Fragment/> */}
        {/* <Portals/> */}
        {/* <HighComp/> */}
        <Link to="/home">Home</Link> | 
        <Link to="/user">用户管理</Link> |  
        <Link to="/profile">个人设置</Link>
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
 
}
