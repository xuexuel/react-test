import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Add() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  return <div className="addMessage">
    <input
      type="text"
      placeholder="请输入昵称"
      value={name}
      onChange={({ target }) => {
        setName(target.value);
      }}
    ></input>
    <textarea
      placeholder="请输入留言"
      onChange={({ target }) => {
        setMessage(target.value)
      }}
    >{message}</textarea>
    <button
      onClick={() => {
        dispatch({
          type: "ADD",
          name,
          message
        });
        setName("");
        setMessage("");
      }}
    >提交留言</button>
  </div>
}

export default Add;
