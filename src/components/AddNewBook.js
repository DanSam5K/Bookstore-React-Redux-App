import React from 'react';
import PropTypes from 'prop-types';

const AddNewBook = (props) => {
  const { id, name } = props;
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book Author" />
        <select id={id} name={name}>
          <option>Computer</option>
          <option>Crime</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Economy</option>
          <option>Comedy</option>
          <option>Action</option>
          <option>Documentaries</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

AddNewBook.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

AddNewBook.defaultProps = {
  id: '',
  name: '',
};

export default AddNewBook;
