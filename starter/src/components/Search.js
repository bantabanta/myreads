import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import PropTypes from 'prop-types';
import BookView from './BookView';

const Search = ({ books }) => {
  const [query, setQuery] = useState('');
  const [queryBooks, setQueryBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    fetchQueryBooks(query);
  };

  const clearQuery = () => {
    updateQuery('');
  };

  // fetching query books:
  // check that there is is a query, if there is
  // fetch from the API, if API errors
  // set the queryBooks to array,
  // else, set it to the result of the call
  // These books don't have a shelf key
  const fetchQueryBooks = (query) => {
    if (query.length > 0) {
      const setShow = async () => {
        const res = await BooksAPI.search(query, 10);
        if (res.error) {
          setQueryBooks([]);
        } else {
          setQueryBooks(res);
        }
      }
      setShow();
    }
    else {
      setQueryBooks([]);
    }
  };

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
              <button onClick={() => clearQuery()}>Clear Search</button>
            </div>
            <ol className="books-grid">
            {queryBooks.map((book) =>
            {book.shelf = 'none'}
            <BookView key={book.id} currentBook={book}/>
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
