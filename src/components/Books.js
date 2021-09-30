import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';
import { addBook, removeBook, loadBook } from '../redux/action/actionCreator';
import store from '../redux/configureStore';
import baseURL from '../redux/books/api';

const Books = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState(store.getState().booksReducer);
  const fetchApi = `${baseURL}/books`;

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

  useEffect(() => {
    const apiBooks = async () => {
      const fetchBook = await fetch(fetchApi);
      const book = await fetchBook.json();
      return dispatch(loadBook(book));
    };
    apiBooks();
    setBookInfo((prevState) => [...prevState]);
  }, []);

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
