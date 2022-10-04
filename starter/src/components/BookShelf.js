import BookView from './BookView';
import PropTypes from "prop-types";

const Bookshelf = ({ books, shelf, onUpdateShelf }) => {

  // Filter for books on given shelf
  const shelfBooks = books.filter((book) => book.shelf === shelf.key)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book) =>
            <BookView
              key={book.id}
              onUpdateShelf={onUpdateShelf}
              currentBook={book}
              books={books}/>
          )}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default Bookshelf;
