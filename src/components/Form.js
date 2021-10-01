/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Form = ({ submitBook }) => {
  const inputRef = useRef([]);

  const inputs = ['title', 'author', 'category'];

  useEffect(() => {
    if (inputs.length !== 0) {
      inputRef.current[0].focus();
    }
  }, [inputs]);

  const addBook = (e) => {
    e.preventDefault();
    if (inputRef.current[0].value && inputRef.current[2].value) {
      const newBook = {
        title: inputRef.current[0].value,
        category: inputRef.current[2].value,
      };
      submitBook(newBook);
      inputRef.current[0].value = '';
      inputRef.current[1].value = '';
      inputRef.current[2].value = 'Category';
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
          ref={(el) => (inputRef.current[0] = el)}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          ref={(el) => (inputRef.current[1] = el)}
          required
        />
        <select
          defaultValue="Category"
          ref={(el) => (inputRef.current[2] = el)}
        >
          <option>Science</option>
          <option>Economy</option>
          <option>Action</option>
          <option>Documentaries</option>
        </select>
        <button type="button" onClick={addBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  submitBook: PropTypes.func.isRequired,
};
