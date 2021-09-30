// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
import * as actions from '../action/bookAction';

const initialBooks = [];

const urlAPI =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CBvlUI2K2HpcwfRuxbFJ/books';

// export const addBook = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// export const removeBook = (book) => ({
//   type: REMOVE_BOOK,
//   book,
// });

const reducer = (state = initialBooks, action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [...state, action.book];

    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);

    default:
      return state;
  }
};

export default reducer;
