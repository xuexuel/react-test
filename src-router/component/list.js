import React from 'react'
import {useParams} from 'react-router-dom';
import data from '../data';

export default function List() {
  // eslint-disable-next-line
  const { type = "good", page =1 } = useParams();
  let nowData = data[type];
  const len = 5;
  let start = (page - 1) * len;
  let end = start + len;
  nowData = nowData.filter((item, index) => (index >= start && index < end));
  console.log(nowData);
  return <ul>{
    nowData.length?nowData.map(item =><li key={item.id}>{item.title}</li>):"暂无数据"
  }</ul>
}