import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return (
      <p>
        I'm a child component with a title <strong>{this.props.title}</strong>
      </p>
    )
  }
}

export class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <p>I'm a parent component</p>
        <ChildComponent title="React is Amazing" />
      </div>
    )
  }
}
