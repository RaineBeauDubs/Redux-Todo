import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) =>
        <h3 key={index}>
          {todo.value}
        </h3>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
  {}
)(TodoList);