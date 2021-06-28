import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    val: ""
  }
  render() {
    let { add } = this.props;
    let { val } = this.state;
    return <div id="create-todo">
      <input
        id="new-todo"
        placeholder="What needs to done?"
        autoComplete="off"
        type="text"
        value={val}
        onChange={({ target }) => {
          this.setState({
            val: target.value
          })
        }}
        onKeyDown={({ keyCode }) => {
          if (keyCode === 13 && val.trim()) {
            console.log('onKeyDown');
            add(val);
            this.setState({
              val: ""
            })
          }
        }}
      />
    </div>
  }
}