import React from "react";
import AddNewBook from "./AddNewBook";
import ShowBooks from "./ShowBooks";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          type: "Science",
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
        {
          type: "Crime",
          title: "Book Four",
          author: "author",
          id: uuidv4(),
        },
      ],
    };
  }

  render() {
    const bookArray = this.state.books;
    return (
      <div>
        <ShowBooks bookList={bookArray} />
        <AddNewBook id="categories" name="categories" selected={true} />
      </div>
    );
  }
}

export default Books;
