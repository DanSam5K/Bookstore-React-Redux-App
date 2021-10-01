import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';
import { addBook, removeBook, loadBook } from '../redux/action/actionCreator';
import '../assets/css/bookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const bookInfo = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  const updateStore = (book) => {
    const newBook = {
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
      author: book.author,
    };
    dispatch(addBook(newBook));
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <main className="bg-grey">
      <div className="center max-width-90 bookSection">
        {bookInfo.map((book) => (
          <Book
            key={bookInfo.indexOf(book)}
            title={book.title}
            category={book.category}
            author={book.author}
            delBook={() => {
              deleteBook(book);
            }}
          />
        ))}
      </div>

      <Form submitBook={updateStore} />
    </main>
  );
};

export default BookList;
