import * as BooksAPI from "../BooksAPI";
import BookView from './BookView';
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';

const Search = ({ books, onUpdateShelf }) => {
  const [query, setQuery] = useState('');
  const [queryBooks, setQueryBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    fetchQueryBooks(query);
  };

  const fetchQueryBooks = (query) => {
    if (query.length > 0) {
      const setShow = async () => {
        const res = await BooksAPI.search(query);
        if (res.error) {
          setQueryBooks([]);
          console.log('error');
        } else {
          setQueryBooks(res);
        }
      }
      setShow();
    } else {
      setQueryBooks([]);
    }
  };

  // If querryBook is already in books, inherit shelf
  // key/value. If not then set queryBooks shelf to none.
  // This feels really 'verbose' for what it's doing...
  // not sure how to clean up.
  const updatedQuery = queryBooks.map(queryBook => {
    books.map(book => {
      if (book.id === queryBook.id) {
        queryBook.shelf = book.shelf;
      }
      return book;
    }
    );
    if (!queryBook.hasOwnProperty('shelf')) {
      queryBook.shelf = 'none'
    };
    return queryBook;
  });

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
      {
        query !== '' && (
          <div className="search-books-results">
            <div className="showing-books">
              <span>
                Showing {queryBooks.length} results for '{query}'
              </span>
              <button onClick={() => updateQuery('')}>Clear Search</button>
            </div>
            <ol className="books-grid">
              {updatedQuery.map((queryBook) =>
                  <BookView
                  key={queryBook.id}
                    currentBook={queryBook}
                    shelf={queryBook.shelf}
                    onUpdateShelf={onUpdateShelf}/>
              )}
            </ol>
          </div>
        )}
    </div>
  )
};

Search.propTypes = {
  books: PropTypes.array.isRequired
}

export default Search;
