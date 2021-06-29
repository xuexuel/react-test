import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

function Li(props) {
  let { id,name, message, selected } = props.data;
  let dispatch = useDispatch();
  let [edit, setEdit] = useState(false);
  let editText = useRef();
  // const [editval,setEdit]
  useEffect(() => {
    if (edit) {
      editText.current.focus();
    }
  },[edit])
  return <li className={edit?"editing":""}>
    <h3>{name}</h3>
    <input
      type="checkbox"
      checked={selected}
      onChange={({target}) => {
        dispatch({
          type: "SELECTED",
          id,
          selected:target.checked
        })
      }}
    />
    <p onDoubleClick={() => {
      setEdit(true)
    }}>{message}</p>
    <textarea
      ref={editText}
      onBlur={() => {
        setEdit(false);
      }}
    ></textarea>
    <a href=".">删除</a>
  </li>
}
export default Li;
