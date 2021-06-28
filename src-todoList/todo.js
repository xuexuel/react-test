import React,{PureComponent,createRef} from 'react'

export default class Todo extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      val:props.data.title
    }
  }
  
  editText = createRef();
  display = createRef();
  componentDidUpdate(prevProps,prevState) {
    if (!prevState.edit && this.state.edit) {
      this.editText.current.focus();
    }
  }
  render() {
    let { data, remove, changeDone,editTitle } = this.props;
    let { edit,val } = this.state;
    let { id,title, done } = data;
    return <li className={edit?"editing":""}>
      <div className={"todo"+(done?"done":"")}>
        <div
          className="display"
          ref={this.display}
        >
          <input
            className="check"
            type="checkbox"
            checked={done}
            onChange={({target}) => {
              changeDone(id,target.checked)
            }}
          />
          <div
            className="todo-content"
            onDoubleClick={() => {
              this.setState({
                edit:true
              })
            }}
          >{title}</div>
          <span className="todo-detroy" onClick={() => {
            remove(data.id);
          }}>x</span>
        </div>
        <div className="edit">
          <input
            className="todo-input"
            type="text"
            ref={this.editText}
            value={val}
            onChange={({target}) => {
              this.setState({
                val: target.value
              })
            }}
            onBlur={() => {
              if (val.trim()) {
                editTitle(id, val);
              } else {
                this.setState({
                  val:title
                })
              }
              this.setState({
                edit: false
              })
            }}
          />
        </div>
      </div>
    </li>
  }
}