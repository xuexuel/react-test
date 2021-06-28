import React, { Component } from 'react';
import Todo from './todo'
class List extends Component{
  render() {
    let { data } = this.props;
    return <ul id="todo-list">
      {
        data.map((item, index) => {
          return < Todo
            {...this.props}
            data={item}
            key={index}
          />
        })
      }
      
    </ul>
  }
}

export default List;