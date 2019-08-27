import React, { Component } from 'react';
import Theme from './Theme';
import { connect } from 'react-redux';
class Content extends Component {
  render() {
    return (
      <div>
        <p style={{color: this.props.themeColor}}>我是内容区</p>
        <Theme {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    themeColor: state.themeReducer.themeColor
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);