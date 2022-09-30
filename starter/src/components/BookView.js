import PropTypes from 'prop-types';

const BookView = ({ currentBook, shelf, onUpdateShelf }) => {

  // TODO: set an 'image not found' image if no thumbnail
  const Thumbnail = (book) => {
    if (book.imageLinks) {
      return (book.imageLinks.smallThumbnail)
    } else { return ('') }
  };

  const updateShelf = (e) => onUpdateShelf(currentBook, e.target.value)

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
                `url(${Thumbnail(currentBook)})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={currentBook.shelf}
            onChange={updateShelf}>
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
  shelf: PropTypes.string.isRequired
};

export default BookView;
