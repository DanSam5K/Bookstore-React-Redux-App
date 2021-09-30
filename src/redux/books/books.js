import { v4 as uuidv4 } from 'uuid';
import * as actions from '../action/bookAction';
import baseURL from './api';

const initialBooks = [];

const urlAPI = `${baseURL}/books`;

const reducer = (state = initialBooks, action) => {
  const { id, title, category } = action;
  switch (action.type) {
    case actions.ADD_BOOK:
      fetch(urlAPI, {
        cash: 'reload',
        method: 'POST',
        body: JSON.stringify({
          item_id: uuidv4(),
          title,
          category,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      }).then(() => {
        window.location.reload();
      });
      return [...state, action.book];

    case actions.REMOVE_BOOK:
      fetch(`${urlAPI}/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          item_id: id,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      });
      return state.filter((book) => book.id !== action.book.id);
    case actions.RETURN_BOOK:
      return Object.keys(action.book).map((key) => ({
        id: key,
        title: action.book[key][0].title,
        category: action.book[key][0].category,
      }));
    default:
      return state;
  }
};

export default reducer;
