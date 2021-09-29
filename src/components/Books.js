import React from "react";
// import { v4 as uuidv4 } from "uuid";
import AddNewBook from "./AddNewBook";
import ShowBooks from "./ShowBooks";
// import store from "../redux/configureStore.js";
// import { books } from "../redux/books/bookReducer";

const Books = () => {
  return (
    <>
      <ShowBooks />
      <AddNewBook id="categories" name="categories" selected />
    </>
  );
};

export default Books;
