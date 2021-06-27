import React, { Component } from 'react';
class DL extends Component{
  render() {
    let { data,name,setOpen,openName } = this.props;
    return <dl className={`friend-group ${name===openName?"expanded":""}`}>
      <dt onClick={() => {
        setOpen(name === openName ? "":name);
      }}>{data.title}</dt>
      {data.list.map((item, index)=><dd key={index}>{item.name}</dd>)}
      </dl>
  }
}
export default DL;