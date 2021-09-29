import React from 'react';
import AddNewBook from './AddNewBook';
import ShowBooks from './ShowBooks';
// import { reducer } from '../redux/books/books';

const Books = () => (
  <>
    <ShowBooks />
    <AddNewBook id="categories" name="categories" selected />
  </>
);

export default Books;
