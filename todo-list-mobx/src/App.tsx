import { Provider } from 'mobx-react';
import ItemStore from './stores/Store'
import Form from "./components/Form";
import List from "./components/List";
import Typography from '@mui/material/Typography';
import './styles/app.module.scss'


const App = () => {
  return (
    <div className="container">
      <Provider ItemStore={ItemStore}>
        <Typography className="headings" sx={{ my: 2 }} variant="h4" gutterBottom component="div">
          WEB development
        </Typography>
        <List />
        <Form />
      </Provider>
    </div>
  );
};

export default App;
