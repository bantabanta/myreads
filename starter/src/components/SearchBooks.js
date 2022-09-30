import * as BooksAPI from "../BooksAPI";
import SearchResults from './SearchResults';
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';

const SearchBooks = ({ books, onUpdateShelf }) => {
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
        res.error ? setQueryBooks([]) : setQueryBooks(res)
      };
      setShow();
    } else {
      setQueryBooks([]);
    };
  };

  return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" >
          Back to Home
        </Link>
        <div className="search-books-input-wrapper">
          <input
            className="search-books"
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
              <span>
                showing {queryBooks.length} results for '<strong>{query}</strong>'...
                <button onClick={() => updateQuery('')}>clear search</button>
              </span>
              {<SearchResults
                query={query}
                books={books}
                queryBooks={queryBooks}
                onUpdateShelf={onUpdateShelf} />}
            </div>
          )}
    </div>
  )
};

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default SearchBooks;
