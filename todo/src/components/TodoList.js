import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleCompleted } from '../actions/actions';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = event => {
    this.setState({ 
      newTodo: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
  };

  toggleCompleted = (event, index) => {
    event.preventDefault();
    this.props.toggleCompleted(index);
  };

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) =>
        <h3 
          key={index}
          className={todo.completed ? 'complete' : ''}
          onClick={event => this.toggleCompleted(event, index)}
        >
          {todo.value}
        </h3>
        )}
        <input
          type='text' 
          value={this.state.newTodo} 
          onChange={this.handleChanges}
          placeholder='Add new ToDo...'
        />
        <button onClick={this.addTodo}>Add To List</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
  { addNewTodo, toggleCompleted }
)(TodoList);