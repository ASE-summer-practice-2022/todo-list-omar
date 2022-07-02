import { useState, useEffect } from "react";
import ItemStore from "../stores/Store";

function Form({ItemStore}:{ItemStore:ItemStore}) {
  const { addItems, editItem, setItem } = ItemStore;
  const [addName, setAddName] = useState("");

  const onChangeHandler = (e: any) => {
    setAddName(e.target.value);
  };

  const onClickHandler = async (e:any) => {
    e.preventDefault()
    if (addName.trim() === "") {
      return false
    }
    if (!setItem) {
      addItems({name:addName});
    }
    else {

      editItem( setItem.id, addName)
    } 
    setAddName("");
  };

  useEffect(() => {
    if (setItem) {
        setAddName(setItem.name)
    }else{
        setAddName("")
    }
  }, [setItem])

  return (
    <div className="my-3">
        <form className="row  d-flex justify-content-center" onSubmit={onClickHandler}>
            <input className="w-50 mx-3 form-control" onChange={(e) => onChangeHandler(e)} required value={addName} placeholder="Add task..."/>
            <button className="w-25 btn btn-dark px-2">{!setItem?"Add Task":"Edit Task"}</button>  
        </form>
    </div>
  );
}

export default Form;