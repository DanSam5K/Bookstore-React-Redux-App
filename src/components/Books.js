import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';
import { addBook, removeBook } from '../redux/action/actionCreator';
import store from '../redux/configureStore';

const Books = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState(store.getState().booksReducer);

  const updateStore = (book) => {
    const newBook = {
      id: uuidv4(), // generate unique ID
      title: book.title,
      author: book.author,
      genre: book.genre,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setBookInfo((prevState) => [...prevState, newBook]);
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));
    const newBooks = bookInfo.filter((item) => item.id !== book.id);
    setBookInfo(newBooks);
  };

  return (
    <div className="books">
      {bookInfo.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          genre={book.genre}
          delBook={() => {
            deleteBook(book);
          }}
        />
      ))}

      <Form submitBook={updateStore} />
    </div>
  );
};

export default Books;
