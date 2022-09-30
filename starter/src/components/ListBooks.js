import BookShelf from './BookShelf';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

const ListBooks = ({ books, onUpdateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            bookshelves.map((shelf) => (
              <BookShelf
                key={shelf.key}
                onUpdateShelf={onUpdateShelf}
                books={books}
                shelf={shelf} />
            ))}
        </div >
      </div >
      <div className="open-search">
        <Link className="open-search" to="/search" >
          Add a Book
        </Link>
      </div>
    </div >
  )
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks;
