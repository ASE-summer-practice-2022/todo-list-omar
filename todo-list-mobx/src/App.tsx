import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import ItemStore from "./stores/Store";
import Typography from '@mui/material/Typography';
import './styles/app.module.scss'

const App = () => {
  const itemStore= new ItemStore()
  return (
    <div className="container">
      <Typography className="headings" sx={{ my: 2 }} variant="h4" gutterBottom component="div">
        WEB development
      </Typography>
      <List ItemStore={itemStore} />
      <Form ItemStore={itemStore}/>
    </div>
  );
};

export default App;