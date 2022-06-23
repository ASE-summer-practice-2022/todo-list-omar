import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import ItemStore from "./stores/Store";
const App = () => {
  const itemStore= new ItemStore()
  return (
    <div className="container">
      <h1 className="text-center py-3">Backend</h1>
      <List ItemStore={itemStore} />
      <Form ItemStore={itemStore}/>
    </div>
  );
};

export default App;