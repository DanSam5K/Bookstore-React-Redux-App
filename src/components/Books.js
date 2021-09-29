import React from 'react';
import { Provider } from 'react-redux';
import AddNewBook from './AddNewBook';
import ShowBooks from './ShowBooks';
import store from '../redux/configureStore';

const Books = () => (
  <Provider store={store}>
    <ShowBooks />
    <AddNewBook id="categories" name="categories" selected />
  </Provider>
);

export default Books;
