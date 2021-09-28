import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import ShowBooks from './ShowBooks';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          type: 'Science',
          title: 'Book One',
          author: 'author',
          id: uuidv4(),
        },
        {
          type: 'Economy',
          title: 'Book Two',
          author: 'author',
          id: uuidv4(),
        },
        {
          type: 'Documentation',
          title: 'Book Three',
          author: 'author',
          id: uuidv4(),
        },
        {
          type: 'Crime',
          title: 'Book Four',
          author: 'author',
          id: uuidv4(),
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <ShowBooks bookList={books} />
        <AddNewBook id="categories" name="categories" selected />
      </div>
    );
  }
}

export default Books;
