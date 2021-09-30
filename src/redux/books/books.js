import * as actions from '../action/bookAction';

const initialBooks = [];

const reducer = (state = initialBooks, action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [...state, action.book];

    case actions.REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);

    case actions.RETURN_BOOK:
      return [...action.booksArray];

    default:
      return state;
  }
};

export default reducer;
