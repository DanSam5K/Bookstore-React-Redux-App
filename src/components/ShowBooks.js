import React from 'react';
import PropTypes from 'prop-types';

const ShowBooks = ({ bookList }) => (
  <ul>
    {bookList.map((book) => (
      <li key={book.id}>
        <div>
          <p>{book.type}</p>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
        <ul>
          <li>comment</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
        <div>
          <p>Completed</p>
        </div>
        <div>
          <p>Current Chapter</p>
          <button type="submit">Update Progress</button>
        </div>
      </li>
    ))}
  </ul>
);

ShowBooks.propTypes = {
  bookList: PropTypes.isRequired,
};

export default ShowBooks;
