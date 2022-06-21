import { useState } from "react";
import useStore from "../store";

function Form() {
  const [name, setName] = useState("");
  const addItems = useStore((state) => state.addItems);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const addItem = () => {
    if (name.trim()==="") {
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
          className="btn btn-outline-primary px-5"
          onClick={(e) => addItem()}
        >
          Add
        </button>
      </div>
      
    </div>
  );
}

export default Form;