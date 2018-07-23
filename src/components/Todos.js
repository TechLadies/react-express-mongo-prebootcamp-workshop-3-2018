import React from "react";

export class Todos extends React.Component {
  state = {
    todos: [
      {
        description: "buy grapes",
        isDone: false
      },
      {
        description: "buy oranges",
        isDone: true
      }
    ],
    newTodoDescription:  "",
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleAddTodo = () => {
    const newTodo = {
      description: this.state.newTodoDescription,
      isDone: false,
    };

    this.setState({
      todos: [
        ...this.state.todos,
        newTodo,
      ],
      newTodoDescription: "",
    });
  }

  handleTodoClick = currentTodo => {
    if (currentTodo.isDone) {
      currentTodo.isDone = false;
    } else {
      currentTodo.isDone = true;
    }

    const updatedState = {
      todos: this.state.todos
    };

    this.setState(updatedState);
  };

  renderNewTodoInput = () => {
    return (
      <div id="new_todo_input">
        <label for="newTodoDescription">Add Todo</label>
        <input
          type="text"
          name="newTodoDescription"
          id="new_todo_description"
          value={this.state.newTodoDescription}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleAddTodo}>+</button>
      </div>
    )
  }

  renderTodos = () => {
    return (<ul>
      {this.state.todos.map(a => {
        let completeClass = "";
        if (a.isDone) {
          completeClass = "complete";
        }
        return (
          <li
            className={completeClass}
            onClick={() => this.handleTodoClick(a)}
          >
            {a.description}
          </li>
        );
      })}
    </ul>);
  }

  render() {
    return (
      <div id="todos">
        <h1>{this.props.title}</h1>
        {this.renderNewTodoInput()}
        {this.renderTodos()}
      </div>
    );
  }

}

