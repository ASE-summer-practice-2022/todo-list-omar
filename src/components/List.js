import useStore from "../store";

function List() {
  const items = useStore((state) => state.items);
  const removeItem = useStore((state) => state.removeItem);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 ">
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item list-group-item-success ">
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 text-start">{item.name} </div>
                <div className="col-md-6 text-end">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => removeItem(item.id)}
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
}

export default List;