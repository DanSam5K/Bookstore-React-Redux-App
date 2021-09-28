import React from "react";
import PropTypes from "prop-types";

const AddNewBook = (props) => {
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book Author" />
        <select id={props.id} name={props.name}>
          <option>Computer</option>
          <option>Crime</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Economy</option>
          <option>Comedy</option>
          <option>Action</option>
          <option>Documentaries</option>
        </select>
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
