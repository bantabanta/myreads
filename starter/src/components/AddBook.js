import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";

const AddBook = ({books}) => {
  const [query, setQuery] = useState('');
  const [queryBooks, setQueryBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery('');
  };

  const showBooks = (query) => {
    const show = async () => {
      const res = await BooksAPI.search(query);
      setQueryBooks(books.concat(res));
      console.log(`showbooks has ${typeof(res)} items`)
    }
    show();
  };

  const showingBooks =
  query === ""
    ? ''
    : showBooks(query);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" >
          Back to Home
        </Link>
        <div className="search-books-input-wrapper">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search books by Title or Author..."
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="search-books-results">
        {
          query !== '' && (
            <div className="showing-books">
              <span>
                Showing {'books.length'} results for '{query}'
              </span>
              <button onClick={() => clearQuery()}>Clear Search</button>
            </div>
          )
        }

        {console.log(typeof(books))}

      </div>
    </div>
  )
};

export default AddBook;
