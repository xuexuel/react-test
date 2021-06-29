import React, { Component } from 'react';
class List extends Component{
  state= {
    show:false
  }
  render() {
    let { data } = this.props;
    let { name, children } = data;
    let { show } = this.state;
    return <li className={show?"submit-show":""}>
      <a onClick={() => {
        this.setState({
          show:!show
        })
      }}>{name}</a>
      <ul className="subList">
        {children.map((item,index) => {
          return <li key={index}>{item}</li>
          
        })}
      </ul>
    </li>
  }
}

export default List;