export const addBook = ({ title, author, genre }) => ({
  type: actions.ADDED_BOOK,
  id: uuidv4(),
  title,
  author,
  genre,
});

export const removeBook = (id) => ({
  type: actions.REMOVED_BOOK,
  id,
});
