import React, { Component } from 'react';
import { connect} from 'react-redux';

class Header extends Component {

  render() {
    return (
      <div>
        <h4 style={{color: this.props.themeColor}}>案例1：设置主题色</h4>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    themeColor: state.themeReducer.themeColor
  }
}

export default connect(mapStateToProps)(Header);