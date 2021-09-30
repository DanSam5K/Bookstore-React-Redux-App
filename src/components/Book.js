import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, rmvBook }) => (
  <>
    <div>
      <div>
        <div>
          <h2>Action</h2>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button" className="book-btn">
            Comments
          </button>
          <button type="button" className="book-btn" onClick={rmvBook}>
            Remove
          </button>
          <button type="button" className="book-btn">
            Edit
          </button>
        </div>
        <div>
          <h4>65%</h4>
          <p>Completed</p>
        </div>
        <div>
          <h4>Current chapter</h4>
          <p>Chapter 17</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  </>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rmvBook: PropTypes.func.isRequired,
};
