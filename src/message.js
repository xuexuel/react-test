import React from 'react';
import { useSelector } from 'react-redux';
import Li from './li';

function Message() {
  let data = useSelector(state => state.data);
  return <ul className="messageList">
    {
      data.map(item => <Li
        key={item.id}
        data={item}
      />)
    }
  </ul>
}

export default Message;
