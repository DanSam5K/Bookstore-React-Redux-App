// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
import * as actions from '../action/bookAction';

const initialBooks = [];

const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CBvlUI2K2HpcwfRuxbFJ/books';

// export const addBook = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// export const removeBook = (book) => ({
//   type: REMOVE_BOOK,
//   book,
// });

const reducer = (state = initialBooks, action) => {
  const { id, title, category } = action;
  switch (action.type) {
    case actions.ADD_BOOK:
      fetch(urlAPI, {
        cash: 'reload',
        method: 'POST',
        body: JSON.stringify({
          id,
          title,
          category,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        window.location.reload();
      });
      return [...state, action.book];

    case actions.REMOVE_BOOK:
      fetch(`${urlAPI}/${id}'`, {
        method: 'DELETE',
        body: JSON.stringify({
          item_id: id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return state.filter((book) => book.id !== action.book.id);
    // case actions.BOOK_GOTTEN:
    //   return Object.keys(action.payload).map((key) => ({
    //     id: key,
    //     title: action.payload[key][0].title,
    //     category: action.payload[key][0].category,
    //   }));
    default:
      return state;
  }
};

export default reducer;
