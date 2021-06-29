import React from 'react';
import "./index.css";
import Add from './add';
import Message from './message';
import Sum from './sum';

function App() {
  return <section className="wrap">
    <h2 className="title">留言板</h2>
    <Add/>
    <Message />
    <Sum/>
  </section>
}

export default App;
