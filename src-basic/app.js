import React, { Component } from 'react';
import List from './list';
import data from './data';
// 类
class App extends Component{
  render() {
    return <ul id="menu">
      {data.map((item, index) => {
        return <List
          key={index}
          data={item}
          index={index}
        />
      })}
    </ul>
  }
}

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
