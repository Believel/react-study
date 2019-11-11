import React, { useContext, Fragment} from 'react'
import {ColorContext, UPDATE_COLOR} from './Color';

export default () => {
  const { color, dispatch} = useContext(ColorContext);
  return (
    <Fragment>
      <button style={{'color': color}} onClick={() => dispatch({type: UPDATE_COLOR, color:'blue'})}>蓝色</button>
      <button style={{'color': color}} onClick={() => dispatch({type: UPDATE_COLOR, color:'red'})}>红色</button>
    </Fragment>
  )
}