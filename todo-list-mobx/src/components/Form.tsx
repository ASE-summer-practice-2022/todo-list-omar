import { useState, useEffect } from "react";
import { ToDoLIstProps } from "./List";
import { toJS } from 'mobx';

function Form(props: ToDoLIstProps) {
  const itemStore = props.ItemStore;
  const { addItems, editItem, setItem } = itemStore;
  const [name, setName] = useState("");
  const setitem = toJS(setItem)

  const onChange = (e: any) => {
    setName(e.target.value);
  };

  const addItem = () => {

    if (name.trim() === "") {
      return false
    }
    if (!setitem) {
      addItems({ name: name });
    }
    else {
      editItem(name, setitem.id)
    } 
    setName("");
  };

  // useEffect(() => {
  //   if (setitem) {
  //       setName(setitem.name)
  //   }else{
  //       setName("")
  //   }
  // }, [setitem])

  return (
    <div className="row my-3 d-flex justify-content-center">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          onChange={(e) => onChange(e)}
          required
          value={name}
          placeholder="Add new item ..."
        ></input>

      </div>
      <div className="col-md-2">
        <button
          className="btn btn-dark px-5"
          onClick={() => addItem()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;