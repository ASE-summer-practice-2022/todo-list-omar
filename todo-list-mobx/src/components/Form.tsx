import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";

const Form = inject('ItemStore')(observer((props: any) => {
  const { addItems, editItem, activeItem } = props.ItemStore;
  const [addName, setAddName] = useState("");

  const onChangeHandler = (e: any) => {
    setAddName(e.target.value);
  };

  const onClickHandler = (e: any) => {
    e.preventDefault(e)
    if (addName.trim() === "") {
      return false
    }
    if (!activeItem) {
      addItems({ name: addName });
      setAddName("");
    }
    else {
      editItem(activeItem.id, addName);
    }

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
      <FormControl>
        <InputLabel htmlFor="my-input">Items</InputLabel>
        <Input onChange={(e) => onChangeHandler(e)} required value={addName} id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">About backend and frontend.</FormHelperText>
        <Button onClick={onClickHandler} variant="contained" size="small" color="primary" > {!activeItem ? "Add Item" : "Edit Item"}</Button>
      </FormControl>
    </div>
  );
}))

export default Form;