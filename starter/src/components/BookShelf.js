import BookView from './BookView';
import PropTypes from "prop-types";

const Bookshelf = ({ books, shelf }) => {
  // console.log('the shelf is', shelf) - component renders twice?
  const currentShelf = books.filter((book) => book.shelf === shelf.key)

  return (

    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {currentShelf.map((book) =>
          <BookView key={book.id} currentBook={book}/>
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
