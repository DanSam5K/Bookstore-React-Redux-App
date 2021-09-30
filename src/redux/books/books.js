import * as actions from '../action/bookAction';

const initialBooks = [];

const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CBvlUI2K2HpcwfRuxbFJ/books';

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
