import BookView from './BookView';
import PropTypes from "prop-types";

const Bookshelf = ({ books, shelf, onUpdateShelf }) => {

  // get array of books with correct shelf value
  const booksOnShelf = books.filter((book) => book.shelf === shelf.key)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) =>
            <BookView
              key={book.id}
              onUpdateShelf={onUpdateShelf}
              currentBook={book}
              shelf={book.shelf}
              books={books}/>
          )}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired
}

export default Bookshelf;
