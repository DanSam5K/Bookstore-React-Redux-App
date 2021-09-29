import * as actions from "../../action/bookAction";
import { v4 as uuidv4 } from "uuid";

export const initialBooks = [
  {
    type: "Science fiction",
    title: "Book One",
    author: "author",
    id: uuidv4(),
  },
  { type: "Economy", title: "Book Two", author: "author", id: uuidv4() },
  {
    type: "Documentation",
    title: "Book Three",
    author: "author",
    id: uuidv4(),
  },
];

const books = (state = initialBooks, action) => {
  switch (action.type) {
    case actions.ADDED_BOOK:
      const { id, title, author, genre } = action;
      return [...state, { id, title, author, genre }];
    case actions.REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
