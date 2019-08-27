import React, { Component } from 'react';
import { connect} from 'react-redux';

class Header extends Component {

  render() {
    return (
      <div>
        <h4 style={{color: this.props.themeColor}}>学习react全家桶</h4>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Header);