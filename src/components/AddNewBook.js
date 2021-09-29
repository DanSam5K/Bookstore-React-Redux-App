import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBook } from "../redux/books/books";

const AddNewBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Science");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTypeChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({ title, author, genre });
    return false;
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={handleAuthorChange}
          required
        />
        <select onChange={handleTypeChange}>
          <option>Computer</option>
          <option>Crime</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Economy</option>
          <option>Comedy</option>
          <option>Action</option>
          <option>Documentaries</option>
        </select>
        <button type="button" onClick={(event) => handleSubmit(event)}>
          Add Book
        </button>
      </form>
    </div>
  );
};

AddNewBook.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

AddNewBook.defaultProps = {
  id: "",
  name: "",
};

export default connect((state) => state, { addBook })(AddNewBook);
