import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/book.css';

const Book = ({ title, category, delBook }) => (
  <div className="book">
    <div id="left">
      <h5 className="category">{category}</h5>
      <h2 className="title">{title}</h2>
      <h4 className="author">John Doe</h4>
      <div className="actions">
        <button type="button" disabled>
          Comments
        </button>
        <button type="button" onClick={delBook}>
          Remove
        </button>
        <button type="button" disabled>
          Edit
        </button>
      </div>
    </div>
    <div id="center">
      <div className="pie-graph" />
      <div className="percent">
        <h1 className="percentage">64%</h1>
        <h4 className="completed">Completed</h4>
      </div>
    </div>
    <div id="right">
      <div className="current all-caps">Current Chapter</div>
      <div className="chapter">Chapter 11</div>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  delBook: PropTypes.func.isRequired,
};
