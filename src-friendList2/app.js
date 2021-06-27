import React, { Component } from 'react';
import DL from './DL';
import datas from './data'
class App extends Component{
  state = {
    openName:"family"
  }
  setOpen = (openName) => {
    this.setState({
      openName
    })
  }
  render() {
    let { openName } = this.state;
    return <div className="friend-list">
      {Object.keys(datas).map((item, index) => {
        return <DL
          key={index}
          name={item}
          data={datas[item]}
          setOpen={this.setOpen}
          openName={openName}
        />
      })}
    </div>
  }
}
export default App;