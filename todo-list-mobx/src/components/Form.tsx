import { useState } from "react";
import { ToDoLIstProps } from "./List";

function Form(props: ToDoLIstProps) {
  const itemStore = props.ItemStore;
  const { addItems } = itemStore;
  const [name, setName] = useState("");

  const onChange = (e: any) => {
    setName(e.target.value);
  };

  const addItem = () => {
    if (name.trim() === "") {
      return false
    }
    addItems({ name: name });
    clear();
  };

  const clear = () => setName("");

  return (
    <div className="row my-3 d-flex justify-content-center">

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          value={name}
          placeholder="Add new item ..."
        ></input>

      </div>
      <div className="col-md-2">
        <button
          className="btn btn-dark px-5"
          onClick={(e) => addItem()}
        >
          Add
        </button>
      </div>

    </div>
  );
}

export default Form;