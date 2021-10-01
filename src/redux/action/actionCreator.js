import axios from 'axios';
import * as actions from './bookAction';
import baseURL from './api';

export const addBook = (book) => async (dispatch) => {
  const res = await axios.post(baseURL, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
  });
  const created = await res.data;
  if (created === 'Created') {
    dispatch({
      type: actions.ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  const res = await axios.delete(`${baseURL}/${bookId}`);
  const deleted = await res.data;
  if (deleted) {
    dispatch({
      type: actions.REMOVE_BOOK,
      bookId,
    });
  }
};

export const loadBook = () => async (dispatch) => {
  const res = await axios.get(baseURL);
  const data = await res.data;
  if (data) {
    const objectArray = Object.entries(data);
    const booksArray = [];
    objectArray.forEach(([key, value]) => {
      const item = { ...value, item_id: key };
      const itemObj = Object.values(item);
      booksArray.push({ ...itemObj[0], item_id: itemObj[1] });
    });
    dispatch({
      type: actions.RETURN_BOOK,
      booksArray,
    });
  }
};
