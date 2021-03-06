import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/form.css';

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
    <div className="bg-grey round-bottom box-shadow">
      <div className="center max-width-90 border-top">
        <h2 className="formTitle">ADD NEW BOOK</h2>
        <form className="bookForm">
          <input
            type="text"
            placeholder="Book title"
            ref={(el) => {
              inputRef.current[0] = el;
            }}
            required
          />
          <input
            type="text"
            placeholder="Book Author"
            ref={(el) => {
              inputRef.current[1] = el;
            }}
            required
          />
          <select
            defaultValue="Category"
            ref={(el) => {
              inputRef.current[2] = el;
            }}
          >
            <option>Science</option>
            <option>Drama</option>
            <option>Fiction</option>
            <option>Crime</option>
            <option>Technology</option>
            <option>Economy</option>
            <option>Action</option>
            <option>Motivational</option>
            <option>Business</option>
            <option>Documentaries</option>
          </select>
          <button type="button" onClick={addBook}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

Form.propTypes = {
  submitBook: PropTypes.func.isRequired,
};
