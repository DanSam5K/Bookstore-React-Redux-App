import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../action/bookAction';

export const initialBooks = [
  {
    id: uuidv4(),
    title: 'Book One',
    author: 'author',
    genre: 'Documentation',
  },
  {
    id: uuidv4(),
    title: 'Book Two',
    author: 'author',
    genre: 'Documentation',
  },
];

const books = (state = initialBooks, action) => {
  switch (action.type) {
    case actions.ADD_BOOK: {
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
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
