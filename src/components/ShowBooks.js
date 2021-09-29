import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeBook } from "../action/actionCreator";

const ShowBooks = (props) => {
  // console.log(props)
  const { books, removeBook } = props;
  return (
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
            <li onClick={() => removeBook(book.id)}>Remove</li>
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
};

ShowBooks.propTypes = {
  books: PropTypes.isRequired,
  removeBook: PropTypes.func,
};

export default connect((state) => state, { removeBook })(ShowBooks);
