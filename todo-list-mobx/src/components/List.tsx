import ItemStore from "../stores/Store";
import { inject, observer } from "mobx-react";
import {Delete, Edit} from '@mui/icons-material';

import { Button, List, ListItem, ListItemText } from "@mui/material";


const TodoList = ({ ItemStore }: { ItemStore: ItemStore }) => {
  const { items, removeItem, updateItem } = ItemStore;
  return (
    <div className="row d-flex justify-content-center">
      <div >
        <List >
          {items.map((item) => (
            <ListItem sx={{ bgcolor: 'text.disabled', my: 1, px:2}}
              key={item.id}
              disableGutters
              secondaryAction={
                <>
                  <Button  onClick={() => removeItem(item.id!)} variant="contained" size="small" color="error" startIcon={<Delete />}>
                    Delete
                  </Button>
                  <Button sx={{ mx: 2 }} onClick={() => updateItem(item.id!)} variant="contained" size="small" color="secondary" endIcon={<Edit />}>
                    Edit
                  </Button>
                </>

              }
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        
      </div>

    </div>
  );
};

export default inject('ItemStore')(observer(TodoList));
