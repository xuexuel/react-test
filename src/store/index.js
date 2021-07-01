import {combineReducers, createStore} from 'redux';

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
  let nowData = [...state.data];
  switch (action.type) {
    case "ADD":
      return {
        data: [...nowData, {
          id: Date.now(),
          name: action.name,
          message: action.message,
          selected: false
        }]
      };
    case "SELECTED":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            selected: action.selected
          }
        }
      })
      return {
        data: nowData
      };
    case "EDIT":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            message: action.message
          }
        }
      })
      return {
        data: nowData
      }
    default: break;
  }
  return state;
}
const store = createStore(combineReducers({
  reducer
}));

export { store };