import React from 'react';
import { useSelector } from 'react-redux';

function Sum() {
  let data = useSelector(state => state.data);
  const selectData=data.filter(item=>item.selected)
  return <div className="sum">
    <label>
      <input
        type="checkbox"
        checked={data.length===selectData.length}
        onChange={() => {
          
        }}
      />
      <span>选中全部</span>
    </label>
    <a href=".">删除选中项</a>
    <p>当前选中{ selectData.length}项，共{data.length}条留言</p>
  </div>
}

export default Sum;
