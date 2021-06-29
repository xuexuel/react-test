import {createStore} from 'redux';

function reducer(state={
  data: [
    {
      id:0,
      name:"王五",
      message: "aaaa",
      selected:false
    }, {
      id: 1,
      name: "张三",
      message: "bbb",
      selected: true
    }
  ]
}, action) {
  switch (action.type) {
    case "ADD":
      return {
        data: [...state.data, {
          id: Date.now(),
          name: action.name,
          message: action.message,
          selected:false
        }]
      }
    case "SELECTED":
      let nowData = [...state.data];
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            selected:action.selected
          }
        }
      })
      return {
        data:nowData
      }
    default: break;
  }
  return state;
}
const store = createStore(reducer);

export { store };