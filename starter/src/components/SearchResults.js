import BookView from './BookView';

const SearchResults = ({books, queryBooks, onUpdateShelf }) => {
  const updatedQuery = queryBooks.map(queryBook => {
    books.map(book => {
      if (book.id === queryBook.id) {
        queryBook.shelf = book.shelf;
      }
      return book;
    }
    );
    if (!queryBook.shelf) {
      queryBook.shelf = 'none'
    };
    return queryBook;
  });

  return (
    <div className="showing-books">
      <ol className="books-grid">
        {updatedQuery.map(queryBook =>
          <BookView
            key={queryBook.id}
            currentBook={queryBook}
            onUpdateShelf={onUpdateShelf} />
        )}
      </ol>
    </div>
  )
}

export default SearchResults;
