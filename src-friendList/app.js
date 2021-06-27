import React, { Component } from 'react';
import DL from './DL';
import datas from './data'
class App extends Component{
  render() {
    return <div className="friend-list">
      {Object.keys(datas).map((item, index) => {
        return <DL
          key={index}
          data={datas[item]}
        />
      })}
    </div>
  }
}
export default App;