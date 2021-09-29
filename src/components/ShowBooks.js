import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeBook } from '../action/actionCreator';

const ShowBooks = (props) => {
  const {
    books = [
      {
        id: uuidv4(),
        title: 'Book One',
        author: 'author',
        genre: 'Fiction',
      },
    ],
    removeBook,
  } = props;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <div>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </div>
          <ul>
            <li>comment</li>
            <li>Edit</li>
          </ul>
          <button type="button" onClick={() => removeBook(book.id)}>
            Remove
          </button>
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
};

ShowBooks.propTypes = {
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.instanceOf(Array),
};

ShowBooks.defaultProps = {
  books: [],
};

export default connect((state) => state, { removeBook })(ShowBooks);
