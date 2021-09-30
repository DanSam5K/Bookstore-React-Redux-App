import * as actions from './bookAction';

export const addBook = (book) => ({
  type: actions.ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: actions.REMOVE_BOOK,
  book,
});
