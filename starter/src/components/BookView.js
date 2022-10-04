import PropTypes from 'prop-types';
import noThumbnail from '../icons/no-image.jpg';

const BookView = ({ currentBook, onUpdateShelf }) => {

  // Set thumbnail or fallback if there is no thumbnail:
  const bookCover = (book) =>
    book.imageLinks
      ? book.imageLinks.smallThumbnail
      : noThumbnail;

  // callback:
  const handleChange = (e) => onUpdateShelf(currentBook, e.target.value)

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage:
                `url(${bookCover(currentBook)})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={currentBook.shelf}
            onChange={handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{currentBook.title}</div>
        {currentBook.authors &&
          currentBook.authors.map((author, index) => (
            <div key={index} className="book-authors">{author}</div>
          ))}
      </div>
    </li>
  )
};

BookView.propTypes = {
  currentBook: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default BookView;
