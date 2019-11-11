import React from 'react';
import Color from './components/Color';
import Header from './components/Header';
import Theme from './components/Theme';
// 函数组件
function Example(){
  return (
    <>
      <Color>
        <Header/>
        <Theme/>
      </Color>
    </>
  )
}


export default Example