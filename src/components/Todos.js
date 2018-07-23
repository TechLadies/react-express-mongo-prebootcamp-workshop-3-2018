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
    ]
  };

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

  render() {
    return (
      <div id="todos">
        <h1>My awesome todo list</h1>
        <ul>
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
        </ul>
      </div>
    );
  }

}

