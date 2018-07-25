import React from "react";

export class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoDescription: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("/api/v1/todos");
    const { todos } = await response.json();

    this.setState({
      todos,
    });
  }

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
    
    const body = {
      todo: newTodo,
    };
    fetch(
      "/api/v1/todos", 
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

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
        <label htmlFor="newTodoDescription">Add Todo</label>
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
