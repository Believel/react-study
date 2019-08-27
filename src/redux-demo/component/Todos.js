import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todos extends Component {
  render() {
    let todoList = this.props.todos
    return (
      <div>
        <h4>案例3：Todo</h4>
        <input type="text" className="todoText"/>
        <ul className="list">
          {
            todoList.map((todo) => {
              return (<li className="item">{todo.text}</li>)
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todoReducer.items
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (todo) => {
      dispatch({ type: 'ADD_TODO', ...todo})
    },
    delTodo: (index) => {
      dispatch({ type: 'DEL_TODO', index})
    },
    toggleTodo: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);