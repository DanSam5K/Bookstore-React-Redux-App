import * as actions from '../../action/bookAction';

export const initialBooks = [];

const books = (state = initialBooks, action) => {
  switch (action.type) {
    case actions.ADDED_BOOK: {
      const {
        id, title, author, genre,
      } = action;
      return [
        ...state,
        {
          id,
          title,
          author,
          genre,
        },
      ];
    }
    case actions.REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
