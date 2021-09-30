import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, genre, delBook,
}) => (
  <>
    <div>
      <div>
        <div>
          <h4>Action</h4>
          <p>{title}</p>
          <p>{author}</p>
          <p>{genre}</p>
          <button type="button" className="book-btn" onClick={delBook}>
            Remove
          </button>
        </div>
        <div>
          <h6>65%</h6>
          <p>Completed</p>
        </div>
        <div>
          <h6>Current chapter</h6>
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
  genre: PropTypes.string.isRequired,
  delBook: PropTypes.func.isRequired,
};
