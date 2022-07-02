import ItemStore from "../stores/Store";
import { inject, observer } from "mobx-react";

const TodoList = ({ItemStore}:{ItemStore:ItemStore}) => {
  const { items, removeItem, updateItem } = ItemStore;
  return (
    <div className="row d-flex justify-content-center">
      <div >
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item list-group-item-secondary ">
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 text-start">{item.name} </div>
                <div className="col-md-6 text-end">
                  <button
                    className="btn btn-primary btn-sm mx-2"
                    onClick={() => updateItem(item.id!)}
                  >
                    Edit
                  </button>                  
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id!)}
                  >
                    Delete
                  </button>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default inject('ItemStore')(observer(TodoList));
