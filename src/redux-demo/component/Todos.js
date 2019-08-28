import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoAction from '../store/actions/todos';

class Todos extends Component {
  handleKeyDown = (e) => {
    // enter
    if (e.keyCode === 13) {
      this.props.addTodo({text: e.target.value})
      e.target.value = ''
    }
  }
  render() {
    let todoList = this.props.todos
    let toggleType = this.props.toggleType
    return (
      <div>
        <h4>案例3：Todo</h4>
        <input type="text" className="todoText" onKeyDown={this.handleKeyDown}/>
        <ul className="list">
          {
            todoList.map((todo, index) => {
              return (<li className="item" key={index}>
              <span style={{textDecoration: todo.completed? 'line-through':''}} onClick={() => this.props.toggleTodo(index)}>{todo.text}</span>
              <button onClick={()=> this.props.delTodo(index)} className="btn" style={{marginLeft: '15px'}}>删除{todo.completed}</button>
              </li>)
            })
          }
        </ul>
        <div>
          <button className="btn" style={{color: toggleType==='all'? 'red': ''}} onClick={() => this.props.switchType('all')}>全部</button>
          <button className="btn" style={{color: toggleType==='completed'? 'red': ''}} onClick={() => this.props.switchType('completed')}>已完成</button>
          <button className="btn" style={{color: toggleType==='uncompleted'? 'red': ''}} onClick={() => this.props.switchType('uncompleted')}>未完成</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todoReducer.items.filter(item => {
      let type = state.todoReducer.toggleType
      if(type === 'all') {
        return item
      } else if(type === 'completed') {
        return item.completed
      } else {
        return !item.completed
      }
    }),
    toggleType: state.todoReducer.toggleType
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (todo) => {
      dispatch(todoAction.addTodo(todo))
    },
    delTodo: (index) => {
      dispatch(todoAction.delTodo(index))
    },
    toggleTodo: (index) => {
      dispatch(todoAction.toggleTodo(index))
    },
    switchType: (toggleType) => {
      dispatch(todoAction.switchType(toggleType))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);