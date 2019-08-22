import React, { Component } from 'react';
import InputComp from './InputComp';
import MobileComp from './MobileComp';
class HighComp extends Component {
  render() {
    return (
      <div>
       <InputComp/>
        <MobileComp/>
        <div>
          content
        </div>
      </div>
    );
  }
}

export default HighComp;