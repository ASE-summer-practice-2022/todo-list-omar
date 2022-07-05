import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useState, useEffect } from "react";
import ItemStore from "../stores/Store";

function Form({ ItemStore }: { ItemStore: ItemStore }) {
  const { addItems, editItem, activeItem } = ItemStore;
  const [addName, setAddName] = useState("");

  const onChangeHandler = (e: any) => {
    setAddName(e.target.value);
  };

  const onClickHandler = (e: any) => {
    e.preventDefault()
    if (addName.trim() === "") {
      return false
    }
    if (!activeItem) {
      addItems({ name: addName });
    }
    else {
      editItem(activeItem.id, addName)
    }
    setAddName("");
  };

  useEffect(() => {
    if (activeItem) {
      setAddName(activeItem.name)
    } else {
      setAddName("")
    }
  }, [activeItem])

  return (
    <div className="my-3">
      <FormControl onClick={onClickHandler} >
        <InputLabel htmlFor="my-input">Items</InputLabel>
        <Input onChange={(e) => onChangeHandler(e)}  required value={addName} id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">About backend and frontend.</FormHelperText>
        <Button variant="contained" size="small" color="primary" > {!activeItem?"Add Item":"Edit Item"}</Button>
      </FormControl>

    </div>
  );
}

export default Form;